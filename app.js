import express from 'express';
import globalErrorHandler from './src/middleware/globalErrorHandler.js';
import mainRouter from './src/routes/routes.js';

const app = express();

app.use(express.json());
app.use('/static', express.static('public'));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1', mainRouter);

app.all('*', (req, res, next) => {
  next(new Error(`Can't find ${req.originalUrl} on this server!`));
});

app.use(globalErrorHandler);

export default app;
