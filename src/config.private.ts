import 'dotenv/config';

export const privateConfig = {
  NODE_ENV: (process.env.NODE_ENV as string) || 'development',
  DATBASE_URL: process.env.DATABASE_URL as string,
};
