import { writeFileSync } from 'fs';
import { config } from 'dotenv';

config();

const targetPathMap = {
  production: 'environment.production.ts',
  development: 'environment.development.ts',
};

const nodeEnv = process.env.NODE_ENV || 'development';

const targetPath = `./src/environments/${targetPathMap[nodeEnv]}`;
const envConfigFile = `
export const environment = {
  AUTH0_CLIENT_ID: '${process.env['AUTH0_CLIENT_ID']}',
  AUTH0_CLIENT_SECRET: '${process.env['AUTH0_CLIENT_SECRET']}',
  AUTH0_CLIENT_DOMAIN: '${process.env['AUTH0_CLIENT_DOMAIN']}',
};
`;

writeFileSync(targetPath, envConfigFile);
console.log(`✅ Environment file generated at ${targetPath}`);
