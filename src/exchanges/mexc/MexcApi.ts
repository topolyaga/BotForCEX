import { ExchangeApi } from '../base/ExchangeApi';
import axios, { AxiosInstance } from 'axios';
import * as crypto from 'crypto';
import * as dotenv from 'dotenv';

dotenv.config();

// 🔐 Твои ключи
const API_KEY = process.env.MEXC_API_KEY!;
const SECRET_KEY = process.env.MEXC_SECRET_KEY!;
const BASE_URL = 'https://api.mexc.com';

export class MexcApi implements ExchangeApi {
  private client: AxiosInstance;

  constructor(private apiKey: string, private apiSecret: string) {
    this.client = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Получить баланс монеты
   */
  async getBalance(asset: string): Promise<number> {
    const path = '/api/v3/account';
    const timestamp = Date.now();
    const query = `timestamp=${timestamp}`;
    const signature = this.sign(query);

    const res = await this.client.get(`${path}?${query}&signature=${signature}`, {
      headers: {
        'X-MEXC-APIKEY': this.apiKey,
      },
    });

    const balances = res.data.balances;
    const assetInfo = balances.find((b: any) => b.asset === asset);
    return assetInfo ? parseFloat(assetInfo.free) : 0;
  }

  async getCoinInfo(asset: string, networkName: string): Promise<object> {
    const path = '/api/v3/capital/config/getall';
    const timestamp = Date.now();
    const query = `timestamp=${timestamp}`;
    const signature = this.sign(query);

    const res = await this.client.get(`${path}?${query}&signature=${signature}`, {
      headers: {
        'X-MEXC-APIKEY': this.apiKey,
      },
    });

    const coin = res.data.find((c: any) => c.coin === asset);
    const network = coin?.networkList.find((n: any) => n.netWork === networkName);

    const obj = network
    ? {
        coin: coin.coin,
        netWork: network.netWork,
        contract: network.contract,
        }
    : {};

    return obj;
  }

  /**
   * Создать ордер (сейчас только market)
   */
  async placeOrder(params: {
    symbol: string;
    side: 'buy' | 'sell';
    type: 'market';
    amount: number;
  }): Promise<any> {
    const path = '/api/v3/order';
    const timestamp = Date.now();

    const body = {
      symbol: params.symbol,
      side: params.side.toUpperCase(),
      type: params.type.toUpperCase(),
      quantity: params.amount.toString(),
      timestamp,
    };

    const query = new URLSearchParams(body as any).toString();
    const signature = this.sign(query);

    const res = await this.client.post(`${path}?${query}&signature=${signature}`, null, {
      headers: {
        'X-MEXC-APIKEY': this.apiKey,
      },
    });

    return res.data;
  }

  /**
   * Вывести монету на внешний адрес
   */
  async withdraw(params: {
    asset: string;
    address: string;
    amount: number;
    network: string;
  }): Promise<any> {
    const path = '/api/v3/capital/withdraw';
    const timestamp = Date.now();

    const body = {
      coin: params.asset,
      address: params.address,
      amount: params.amount.toString(),
      netWork: params.network,
      timestamp,
    };

    const query = new URLSearchParams(body as any).toString();
    const signature = this.sign(query);

    const res = await this.client.post(`${path}?${query}&signature=${signature}`, null, {
      headers: {
        'X-MEXC-APIKEY': this.apiKey,
      },
    });

    return res.data;
  }

  /**
   * Получить депозитный адрес
   */
  async getDepositAddress(asset: string, network: string): Promise<string> {
    const path = '/api/v3/capital/deposit/address';
    const timestamp = Date.now();

    const query = `coin=${asset}&network=${network}&timestamp=${timestamp}`;
    const signature = this.sign(query);

    const res = await this.client.get(`${path}?${query}&signature=${signature}`, {
      headers: {
        'X-MEXC-APIKEY': this.apiKey,
      },
    });

    return res.data.address;
  }

  /**
   * Подписывает запрос HMAC SHA256
   */
  private sign(query: string): string {
    return crypto.createHmac('sha256', this.apiSecret).update(query).digest('hex');
  }
}

// (async() => {
//     const api = new MexcApi(API_KEY, SECRET_KEY);
//     const res = await api.withdraw( { asset: 'USDT', address: 'UQDCPStf7JzpMERUsMIDt8WseY0dzHEMOWtbrHYwRpVeejFq',amount: 10, network: 'TONCOIN' } );
//     console.log(res);
// })();
