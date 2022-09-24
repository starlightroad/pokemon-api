import dotenv from 'dotenv';

dotenv.config();

const { NODE_ENV, PORT } = process.env;

const config = {
  PORT: PORT || 3001,
  NODE_ENV
};

export default config;
