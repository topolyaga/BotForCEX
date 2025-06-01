import axios from 'axios';
import { createHmac } from 'crypto';
import * as dotenv from 'dotenv';

import { Updates } from './src/websocketClient';

dotenv.config();

async function checkWithdraw() {
   ///


   ///


   //


}

(async ()=> {
  Updates.on('balanceUpdate', (balance) => {
      // console.log(balance);
      checkWithdraw(balance)
  });
})();

// const API_KEY = process.env.MEXC_API_KEY!;
// const SECRET_KEY = process.env.MEXC_SECRET_KEY!;

// function getSignature(params: Record<string, string>): string {
//   const query = Object.keys(params)
//     .sort()
//     .map(key => `${key}=${params[key]}`)
//     .join('&');

//   return createHmac('sha256', SECRET_KEY).update(query).digest('hex');
// }

// async function testSignature() {
//   const timestamp = Date.now().toString();
//   const params = { timestamp };
//   const signature = getSignature(params);

//   const url = 'https://api.mexc.com/api/v3/account';

//   try {
//     const response = await axios.get(url, {
//       params: { ...params, signature },
//       headers: {
//         'X-MEXC-APIKEY': API_KEY
//       }
//     });

//     console.log('✅ Подпись верна, данные аккаунта получены:');
//     console.dir(response.data);
//   } catch (error: any) {
//     console.error('❌ Ошибка запроса:', error.response?.data || error.message);
//   }
// }

// testSignature();