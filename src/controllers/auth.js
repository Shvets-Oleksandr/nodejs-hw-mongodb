import * as authServices from '../services/auth.js';

export const registerController = async (req, res) => {
  const data = await authServices.registerUser(req.body);

  res.status(201).json({
    status: 201,
    message: 'uccessfully registered a user!',
    data,
  });
};
