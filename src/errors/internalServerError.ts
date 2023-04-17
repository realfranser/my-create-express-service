import Boom from 'boom';
import { RequestHandler } from 'express';

const INTERNAL_SERVER_ERROR_MESSAGE = 'Internal Server Error';

export const internalServerError: RequestHandler = (req, res, next) => {
  const internalServerError = Boom.notFound(INTERNAL_SERVER_ERROR_MESSAGE);
  next(internalServerError);
};
