import createHttpError from 'http-errors';

export const notFoundeHandler = (req, res, next) => {
  throw createHttpError(404, 'Route not found');
};
