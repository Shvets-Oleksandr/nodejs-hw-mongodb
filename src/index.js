import { setupServer } from './server.js';
import { initMongoDB } from './db/initMongoDB.js';
import { createDirIfNotExist } from './utils/createDirIfNotExists.js';

import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/index.js';

const boostrap = async () => {
  await createDirIfNotExist(TEMP_UPLOAD_DIR);
  await createDirIfNotExist(UPLOAD_DIR);
  await initMongoDB();
  setupServer();
};

boostrap();
