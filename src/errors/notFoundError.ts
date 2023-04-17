import Boom from 'boom';
import { RequestHandler } from 'express';

const ROUTE_NOT_FOUND_ERROR_MESSAGE = 'Page not found';

export const notFoundError: RequestHandler = (req, res, next) => {
  const routeNotFoundError = Boom.notFound(ROUTE_NOT_FOUND_ERROR_MESSAGE);
  next(routeNotFoundError);
};
