export interface ExchangeApi {
    getBalance(asset: string): Promise<number>;

    getCoinInfo(asset: string, networkName: string): Promise<object>;
  
    placeOrder(params: {
      symbol: string;
      side: 'buy' | 'sell';
      type: 'market' | 'limit';
      amount: number;
      price?: number;
    }): Promise<any>;
  
    withdraw(params: {
      asset: string;
      address: string;
      amount: number;
      network: string;
    }): Promise<any>;
  
    getDepositAddress(asset: string, network: string): Promise<string>;
  }

interface NetworkClient {
    transfer(): Promise<any>;
    estimateFees(): Promise<any>;
  }