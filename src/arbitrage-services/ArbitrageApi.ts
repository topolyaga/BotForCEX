// src/arbitrage/ArbitrageApi.ts

import axios from 'axios';
import { decodeJwtPayload, encodeJwt } from '../utils/jwt';

const REFRESH_URL = 'https://arbitrageservices-api-2.com/refresh';
const SPREADS_URL = 'https://arbitrageservices-api-2.com/dex/spreads';
const FRESH_URL = 'https://arbitrageservices-api-2.com/notification?fresh=1';

export class ArbitrageApi {
  private accessToken: string;
  private refreshToken: string;
  private readonly secret: string;

  constructor(secret: string, accessToken: string, refreshToken: string) {
    this.secret = secret;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  public async updateJwtCookies(): Promise<void> {
    this.accessToken = await encodeJwt(decodeJwtPayload(this.accessToken), this.secret);
    this.refreshToken = await encodeJwt(decodeJwtPayload(this.refreshToken), this.secret);
  }

  private getCommonHeaders(): Record<string, string> {
    return {
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
      'sec-ch-ua-platform': '"Windows"',
      'authorization': `Bearer ${this.accessToken}`,
    };
  }

  public async fetchSpreads(): Promise<any> {
    try {
      const res = await axios.get(SPREADS_URL, {
        headers: this.getCommonHeaders(),
        decompress: true
      });
      return res.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 401) {
        console.warn('❌ Неавторизован. Попытка обновить токен...');
        await this.refreshTokens();
      }
      throw err;
    }
  }

  public async fetchFreshNotifications(): Promise<any> {
    try {
      const res = await axios.get(FRESH_URL, {
        headers: this.getCommonHeaders(),
        decompress: true
      });
      return res.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 401) {
        console.warn('❌ Неавторизован. Попытка обновить токен...');
        await this.refreshTokens();
      }
      throw err;
    }
  }

  public async refreshTokens(): Promise<void> {
    const headers = {
      ...this.getCommonHeaders(),
      'Content-Length': '170'
    };

    const res = await axios.post(REFRESH_URL, {
      refresh_token: this.refreshToken
    }, {
      headers,
      decompress: true
    });

    this.accessToken = res.data.access_token;
    this.refreshToken = res.data.refresh_token;

    await this.updateJwtCookies();
  }

  public getAccessToken(): string {
    return this.accessToken;
  }

  public getRefreshToken(): string {
    return this.refreshToken;
  }
}
