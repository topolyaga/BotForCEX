import axios from 'axios';
import { createHmac } from 'crypto';
import WebSocket from 'ws';
import crypto from 'crypto';
import * as dotenv from 'dotenv';
import protobuf from './proto_bundle';
import Reader from 'protobufjs';
import { EventEmitter } from 'events';

export const Updates = new EventEmitter();

dotenv.config();

// 🔐 Твои ключи
const API_KEY = process.env.MEXC_API_KEY!;
const SECRET_KEY = process.env.MEXC_SECRET_KEY!;

const BASE_REST_URL = 'https://api.mexc.com';
const BASE_WS_URL = 'wss://wbs-api.mexc.com/ws';

// Получаем подпись
async function getSignature(params: Record<string, string>): Promise<string> {
    const query = Object.keys(params)
      .sort()
      .map(key => `${key}=${params[key]}`)
      .join('&');
  
    return createHmac('sha256', SECRET_KEY).update(query).digest('hex');
  }


// Получить все существующие листен ключи
async function getAllListenKey(): Promise<string> {
    console.log('Получаем весь список ключей...');
    const timestamp = Date.now().toString();
    const params = { timestamp };
    const signature = await getSignature(params);

    try {
        const res = await axios.get(`${BASE_REST_URL}/api/v3/userDataStream`, {
            params: { ...params, signature },
            headers: {
                'X-MEXC-APIKEY': API_KEY,
                'Content-Type': 'application/json',
              }
        });
        console.log('✅ список listenKey получен:', res.data.listenKey);
        return res.data.listenKey;
      } catch (error: any) {
        console.error('❌ Ошибка при получении списка listenKey:', error.message);
        throw error;
      }
}

// 🧾 Получение нового listenKey
async function getListenKey(): Promise<string> {
  console.log('🟡 Получаем listenKey через REST API...');

  const timestamp = Date.now().toString();
  const params = { timestamp };
  const signature = await getSignature(params);

  try {
    const res = await axios.post(`${BASE_REST_URL}/api/v3/userDataStream`, null, {
        params: { ...params, signature },
        headers: {
          'X-MEXC-APIKEY': API_KEY,
          'Content-Type': 'application/json',
        }
    });
    console.log('✅ listenKey получен:', res.data.listenKey);
    return res.data.listenKey;
  } catch (error: any) {
    console.error('❌ Ошибка при получении listenKey:', error.message);
    throw error;
  }
}

// 🔁 Продление listenKey
async function keepAliveListenKey(listenKey: string): Promise<void> {
  try {
    const timestamp = Date.now().toString();
    const params = { listenKey, timestamp };
    const signature = await getSignature(params);

    await axios.put(`${BASE_REST_URL}/api/v3/userDataStream`, null, {
      params: { ...params, signature },
      headers: {
          'X-MEXC-APIKEY': API_KEY,
          'Content-Type': 'application/json',
        }
    });
    console.log('🔄 listenKey успешно продлён');
  } catch (error: any) {
    console.error('❌ Не удалось продлить listenKey:', error.response?.data || error.message);
  }
}

// 🌐 Подключение к WebSocket
async function startWebSocket() {

  const listenKey = await getListenKey();
  const wsUrl = `${BASE_WS_URL}?listenKey=${listenKey}`;

  keepAliveListenKey(listenKey);
  
  console.log('🌐 Подключаемся к WebSocket по адресу:', wsUrl);

  const ws = new WebSocket(wsUrl);

  const ping = {
    method: 'PING'
  };

  setInterval(() => {
    console.log('🏓 PING ');
    ws.send(JSON.stringify(ping));
  }, 1000 * 58 * 1);

  
  ws.on('open', () => {
    console.log('✅ WebSocket соединение открыто');

    const payload = {
      method: 'SUBSCRIPTION',
      params: ['spot@private.account.v3.api.pb'],
      id: Date.now(),
    };

    console.log('📨 Отправляем подписку на обновления аккаунта:', payload);
    ws.send(JSON.stringify(payload));
  });

  ws.on('message', (data: Buffer) => {

    let isJson = false;

    try {
        const json = JSON.parse(data.toString());
        if (json.msg === "PONG") {
            console.log('PONG 🏓');
        } else {
            console.log('🧾 JSON-сообщение от сервера:', JSON.stringify(json, null, 2));
        };
        
        isJson = true;
    } catch (e){
        console.warn('⚠️ Не JSON -> декодируем протобаф:');
    }

    if (!isJson){
        // ✅ Это protobuf, декодируем
    
        const decoded = protobuf.PushDataV3ApiWrapper.decode(data);
        
        const balanceUpdate = decoded.privateAccount;
    
        if (balanceUpdate) {
            console.log('📬 Обновление баланса:', JSON.stringify(balanceUpdate, null, 2));
        } else {
            console.log('📦 Пришло protobuf-сообщение, но не про баланс. Канал:', decoded.channel);
        }
    }

  });

  ws.on('close', () => {
    console.warn('⚠️ WebSocket соединение закрыто. Переподключение через 5 сек...');
    setTimeout(startWebSocket, 5000);
  });

  ws.on('error', (err) => {
    console.error('❗ WebSocket ошибка:', err.message);
  });

  // ⏱ Продлеваем listenKey каждые 30 минут
  setInterval(() => {
    console.log('🕐 Продлеваем listenKey...');
    keepAliveListenKey(listenKey);
  }, 1000 * 60 * 30);
}



// ▶️ Запуск
getAllListenKey();
startWebSocket().catch((e) => {
  console.error('❌ Критическая ошибка в startWebSocket:', e.message);
});