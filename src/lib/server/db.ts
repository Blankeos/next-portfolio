import { privateConfig } from '@/config.private';
import postgres from 'postgres';

declare global {
  var __sql: any;
}

const sql = postgres(privateConfig.DATBASE_URL);

if (privateConfig.NODE_ENV === 'development') {
  globalThis.__sql = sql;
}

export { sql };
