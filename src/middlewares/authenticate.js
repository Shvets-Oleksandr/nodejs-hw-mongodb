import createHttpError from 'http-errors';

import { getSession, getUser } from '../services/auth.js';

export const authenticate = async (req, res, next) => {
  const authHeder = req.get('Authorization');
  if (!authHeder) {
    return next(createHttpError(401, 'Please provide Authorization header'));
  }
  const [bearer, token] = authHeder.split(' ');
  if (bearer !== 'Bearer' || !token) {
    return next(createHttpError(401, 'Auth header should be of type Bearer'));
  }

  const session = await getSession({ accessToken: token });
  if (!session) {
    return next(createHttpError(401, 'Session not found'));
  }

  if (Date.now > session.accessTokenValidUntil) {
    return next(createHttpError(401, 'Access token expired'));
  }

  const user = await getUser({ _id: session.userId });
  if (!user) {
    return next(createHttpError(401, 'User not found'));
  }

  req.user = user;

  next();
};
