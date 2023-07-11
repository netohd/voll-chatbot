import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env' });
} else {
  dotenv.config({ path: '.env' });
}

export const SECRET_KEY = process.env.SECRET_KEY
export const BASE_URL = process.env.BASE_URL

export const DB_HOST = process.env.DB_HOST
export const DB_NAME = process.env.DB_NAME
export const DB_USER = process.env.DB_USER
export const DB_PASS = process.env.DB_PASS
export const DB_DIALECT = process.env.DB_DIALECT
export const DB_PORT = process.env.DB_PORT