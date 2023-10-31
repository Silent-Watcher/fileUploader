const dotenv = require('dotenv');
const { join } = require('path');
const { env } = require('process');

dotenv.config();

const ENV_BASE_PATH = join(__dirname, '..', `.env.${env.APP_ENV}`);

dotenv.config({
	path: ENV_BASE_PATH,
});
