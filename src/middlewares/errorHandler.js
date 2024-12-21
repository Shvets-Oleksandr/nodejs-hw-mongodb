export const errorHandler = (error, req, res, next) => {
  const { status = 500 } = error;
  res.status(status).json({
    status,
    message: 'Something went wrong',
    error: error.message,
  });
};
