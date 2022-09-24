import AppError from '../helpers/appError.js';

const handleCastErrorMongoDB = (err) => {
  console.log(err);

  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const handleValidationErrorMongoDB = (err) => {
  const errors = Object.values(err.errors).map((error) => error.message);
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(500).json({
      status: err.status,
      message: err.message
    });
  }

  if (!err.isOperational) {
    console.error('ERROR!', err);

    res.status(500).json({
      status: 'error',
      message: 'Something went really wrong!'
    });
  }
};

const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  }

  if (process.env.NODE_ENV === 'production') {
    let error = JSON.parse(JSON.stringify(err));

    if (error.name === 'CastError') error = handleCastErrorMongoDB(error);
    if (error.name === 'ValidationError')
      error = handleValidationErrorMongoDB(error);

    sendErrorProd(error, res);
  }
};

export default globalErrorHandler;
