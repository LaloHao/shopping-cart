import * as jwt from 'jsonwebtoken';

export const authenticate = request => {
  const token = request?.headers?.authorization?.slice(7);

  if (token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch(err) {
      return null;
    }
  }
}

const config = {
  expiresIn: '15m', // 15 minutes
};

export const createJWT = params =>
  ({ token: jwt.sign(params, process.env.JWT_SECRET, config) });
