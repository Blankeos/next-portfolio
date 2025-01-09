import { privateConfig } from '@/config.private';
import postgres from 'postgres';

declare global {
  // eslint-disable-next-line no-var
  var __sql: unknown;
}

const sql = postgres(privateConfig.DATBASE_URL);

if (privateConfig.NODE_ENV === 'development') {
  globalThis.__sql = sql;
}

export { sql };
