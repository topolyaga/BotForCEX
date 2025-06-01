import { askQuestion } from '../utils/readline';
import { ArbitrageApi } from '../arbitrage-services/ArbitrageApi';

export async function startScanner() {
  const access = await askQuestion('Введите access токен: ');
  const refresh = await askQuestion('Введите refresh токен: ');
  const SECRET = 'NvMXoNBXGrk37ViFSWpxJ9HvmRTzYT';
  const api = new ArbitrageApi(SECRET, access, refresh);

  function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  setInterval(async () => {
    try {
        const fresh1 = await api.fetchFreshNotifications();
        console.log('🔔 Fresh 1:', fresh1);
        await sleep(4000);
        const fresh2 = await api.fetchFreshNotifications();
        console.log('🔔 Fresh 2:', fresh2);
      } catch (err) {
        console.error('Ошибка при получении fresh:', err);
      }
  }, 10 * 1000);

  sleep(3*1000);

  setInterval(async () => {
    try {
        const spreads = await api.fetchSpreads();
        console.log('📊 Spreads:');
      } catch (err) {
        console.error('Ошибка при получении spreads:', err);
      }
  }, 10 * 1000);
  
}