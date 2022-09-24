const { DB_URL, DB_USERNAME, DB_PASSWORD } = process.env;

const config = {
  URL: DB_URL,
  USERNAME: DB_USERNAME,
  PASSWORD: DB_PASSWORD
};

export default config;
