// src/core/TokenManager.ts

import { createJwt, decodeJwtPayload } from '../src/utils/jwt';

const SECRET = 'NvMXoNBXGrk37ViFSWpxJ9HvmRTzYT';

let accessToken = '';
let refreshToken = '';
let cookieAccessToken = '';
let cookieRefreshToken = '';

export function getAuthTokens() {
  return {
    accessToken,
    refreshToken,
    cookieAccessToken,
    cookieRefreshToken,
  };
}

export function setInitialTokens(access: string, refresh: string) {
  accessToken = access;
  refreshToken = refresh;
}

export async function rebuildCookies() {
  cookieAccessToken = await recreateToken(accessToken);
  cookieRefreshToken = await recreateToken(refreshToken);

  console.log('🔐 Куки пересобраны:', {
    cookieAccessToken,
    cookieRefreshToken,
  });
}

export async function updateTokens(newAccess: string, newRefresh: string) {
  console.log('🔄 Обновление токенов');
  console.log('Старые:', { accessToken, refreshToken });

  accessToken = newAccess;
  refreshToken = newRefresh;

  await rebuildCookies();

  console.log('Новые:', { accessToken, refreshToken });
}

export async function recreateToken(token: string): Promise<string> {
  const payload = decodeJwtPayload(token);
  return await createJwt(payload, undefined, SECRET);
}
