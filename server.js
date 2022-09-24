import app from './app.js';
import config from './src/config/app.js';
import db from './src/services/mongoose.js';

db.init();

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
