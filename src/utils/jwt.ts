// src/utils/jwt.ts
import { createHmac } from 'crypto';

/**
 * Расшифровывает payload из JWT без валидации подписи.
 * @param token JWT токен
 * @returns Объект payload
 */
export function decodeJwtPayload(token: string): Record<string, any> {
  const base64Url = token.split('.')[1];
  if (!base64Url) throw new Error('Invalid JWT: missing payload');

  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64.padEnd(base64.length + (4 - base64.length % 4) % 4, '=');
  const decoded = Buffer.from(padded, 'base64').toString('utf-8');
  return JSON.parse(decoded);
}

/**
 * Подписывает payload и возвращает полный JWT.
 * @param payload Тело токена
 * @param secret Секрет для подписи (обычно берется из браузера)
 * @param header Заголовок JWT, по умолчанию { typ: 'JWT', alg: 'HS256' }
 * @returns Полноценный JWT строкой
 */
export async function encodeJwt(
  payload: Record<string, unknown>,
  secret: string,
  header: Record<string, string> = { typ: 'JWT', alg: 'HS256' }
): Promise<string> {
  const base64url = (obj: object) =>
    Buffer.from(JSON.stringify(obj)).toString('base64');

  const encodedHeader = base64url(header);
  const encodedPayload = base64url(payload);
  const data = `${encodedHeader}.${encodedPayload}`;

  const hmac = createHmac('sha256', Buffer.from(secret, 'utf8'));
  hmac.update(data, 'utf8');
  const signature = hmac.digest('base64');

  return `${data}.${signature}`;
}
