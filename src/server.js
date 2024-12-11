import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = Number(process.env.PORT);

export const setupServer = () => {
  const app = express();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
