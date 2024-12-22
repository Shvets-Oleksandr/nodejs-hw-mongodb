import HttpError from 'http-errors';

export const notFoundeHandler = (req, res, next) => {
  throw HttpError(404, 'Route not found');
};
