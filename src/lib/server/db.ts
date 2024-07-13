import { privateConfig } from '@/config.private';
import postgres from 'postgres';

export const sql = postgres(privateConfig.DATBASE_URL);
