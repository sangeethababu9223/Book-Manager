import dotenv from 'dotenv';
dotenv.config();
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const connectionString = process.env.CONNECTION_STRING.trim();
export const appbasedirectory = process.env.MY_APP_HOME;