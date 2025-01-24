import { readFileSync } from 'node:fs';
import swaggerUiExpress from 'swagger-ui-express';
import createHttpError from 'http-errors';

import { SWAGGER_PATH } from '../constants/index.js';

export const swaggerDocs = () => {
  try {
    const swaggerDoc = JSON.parse(readFileSync(SWAGGER_PATH, 'utf-8'));
    return [...swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDoc)];
  } catch {
    return (req, res, next) => {
      next(createHttpError(500, "Can't load swagger docs"));
    };
  }
};
