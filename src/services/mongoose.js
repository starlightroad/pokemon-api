import mongoose from 'mongoose';
import config from '../config/db.js';

const db = {
  init() {
    let url = config.URL;
    url = url.replace('<username>', config.USERNAME);
    url = url.replace('<password>', config.PASSWORD);

    mongoose.connect(url).then(() => console.log('DB connection established!'));
  }
};

export default db;
