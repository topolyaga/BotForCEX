import axios from 'axios';
import zlib from 'zlib';
import { createHmac } from 'crypto';
import readline from 'readline';

// Твой Bearer токен авторизации, полученный из заголовков
const SECRET = 'NvMXoNBXGrk37ViFSWpxJ9HvmRTzYT'; // такой же как в браузере
let COOCKIE_ACCESS_TOKEN = '111';
let COOCKIE_RESRESH_TOKEN = '111';
let ACCESS_TOKEN = '';
let RESRESH_TOKEN = '';

const REFRESH_URL = 'https://arbitrageservices-api-2.com/refresh';
const SPREADS_URL = 'https://arbitrageservices-api-2.com/dex/spreads';
const FRESH_URL = 'https://arbitrageservices-api-2.com/notification?fresh=1';

// Функция для base64 без padding
function decodeJwtPayload(token: string): Record<string, any> {
    const base64Url = token.split('.')[1];
    if (!base64Url) {
      throw new Error('Invalid JWT: payload part not found');
    }
  
    // Приводим base64url к base64
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  
    // Добавляем padding если нужно
    const padded = base64.padEnd(base64.length + (4 - base64.length % 4) % 4, '=');
  
    // Декодируем из base64 в строку
    const decoded = Buffer.from(padded, 'base64').toString('utf-8');

  
    return JSON.parse(decoded);
  }

async function Ra(data: string, secret: string): Promise<string> {
    const hmac = createHmac("sha256", Buffer.from(secret, "utf8"));
    hmac.update(data, "utf8");

    return hmac.digest("base64");
  }

const Fa = async (
    payload: Record<string, unknown>,
    header: Record<string, string> = { typ: "JWT", alg: "HS256" },
    secret: string = SECRET
  ): Promise<string> => {
    const base64url = (obj: object) =>
      Buffer.from(JSON.stringify(obj))
        .toString("base64")
        
  
    const encodedHeader = base64url(header);
    const encodedPayload = base64url(payload);
    const data = `${encodedHeader}.${encodedPayload}`;
    const signature = await Ra(data, secret);
     

    return `${encodedHeader}.${encodedPayload}.${signature}`;
  };

async function recreateToken(token:string): Promise<string> {
    const payload = decodeJwtPayload(token);
    return await Fa(payload, undefined, SECRET)
  };

async function updateAllToken() {
    COOCKIE_ACCESS_TOKEN = await recreateToken(ACCESS_TOKEN);
    COOCKIE_RESRESH_TOKEN = await recreateToken(RESRESH_TOKEN);
    console.log('Пересобрали куки:', {'access' : COOCKIE_ACCESS_TOKEN, 'refresh' : COOCKIE_RESRESH_TOKEN});
};

//   setInterval(async() => {
//     COOCKIE_ACCESS_TOKEN = await recreateToken(ACCESS_TOKEN);
//     COOCKIE_RESRESH_TOKEN = await recreateToken(RESRESH_TOKEN);
//   }, 20 * 60 * 1000);

// Основные заголовки, которые имитируют браузер

const spreadHeaders = {
  'Accept': '*/*',
  'Accept-Encoding': 'gzip, deflate, br, zstd',
  'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
  'Connection': 'keep-alive',
  'Host': 'arbitrageservices-api-2.com',
  'Origin': 'https://arbitrage-services.com',
  'Referer': 'https://arbitrage-services.com/',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'cross-site',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
  'content-type': 'application/json',
  'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"'
};

const refreshHeaders = {
    'Content-length': '170'
  };



 
async function main() {

    async function fetchSpreads() {
        try {
          const response = await axios.get(SPREADS_URL, {
            headers: {
                ...spreadHeaders,
                authorization: `Bearer ${COOCKIE_ACCESS_TOKEN}`,
              },
            decompress: true, // чтобы можно было распаковать gzip
          });
      
          console.log('[SPREADS] Данные:', response.data);
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
              if (error.response?.status === 401) {
                console.error('❌ Неавторизован, попытка запроса нового токена...');
                await createRefreshToken();
              } else {
                console.error('⚠️ Другая ошибка:', error.message);
              }
            }
          }
      }
      
      async function notificationFresh() {
        try {
          const response = await axios.get(FRESH_URL, {
            headers: {
                ...spreadHeaders,
                authorization: `Bearer ${COOCKIE_ACCESS_TOKEN}`,
              },
            decompress: true, // чтобы можно было распаковать gzip
          });
      
          console.log('FRESH:', response.data);
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
              if (error.response?.status === 401) {
                console.error('❌ Неавторизован, попытка запроса нового токена...');
                await createRefreshToken();
              } else {
                console.error('⚠️ Другая ошибка:', error.message);
              }
            }
          }
      }
    
    async function createRefreshToken() {
        try {
          const response = await axios.post(REFRESH_URL, { refresh_token: COOCKIE_RESRESH_TOKEN }, {
            headers: { 
                ...spreadHeaders,
                authorization: `Bearer ${COOCKIE_ACCESS_TOKEN}`, 
                ...refreshHeaders
            },
            decompress: true, 
          });
      
          console.log('Обновляем REFRESH:\n Старые данные:', {'access' : ACCESS_TOKEN, 'refresh' : RESRESH_TOKEN});
    
          ACCESS_TOKEN = response.data.access_token;
          RESRESH_TOKEN = response.data.refresh_token;
    
          console.log('Обновленные данные:', {'access' : ACCESS_TOKEN, 'refresh' : RESRESH_TOKEN});
    
          await updateAllToken();
    
    
        } catch (err) {
            if (err instanceof Error) {
                console.error('Ошибка запроса:', err.message);
              } else {
                console.error('Неизвестная ошибка', err);
              }
        }
      }

    // function askQuestion(query: string): Promise<string> {
    //     const rl = readline.createInterface({
    //       input: process.stdin,
    //       output: process.stdout,
    //     });
      
    //     return new Promise(resolve =>
    //       rl.question(query, answer => {
    //         rl.close();
    //         resolve(answer);
    //       }),
    //     );
    //   }

    // COOCKIE_ACCESS_TOKEN = await askQuestion('Введите access токен: ');
    // COOCKIE_RESRESH_TOKEN = await askQuestion('Введите refresh токен: ');
    // console.log('Текущие токены:', {'Coockie_access_token:' : COOCKIE_ACCESS_TOKEN, 'Coockie_refresh_token:' : COOCKIE_RESRESH_TOKEN });

    function sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
      };



    setInterval(async() => {
        await fetchSpreads();
        await sleep(10*1000);
        await notificationFresh();
        await sleep(10*1000);
        await notificationFresh();
      }, 10 * 1000);
      
    setInterval(async() => {
        await fetchSpreads();
      }, 5 * 1000);

  }
  
  main();