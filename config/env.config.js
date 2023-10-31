const dotenv = require('dotenv');
const { join } = require('path');
const { env } = require('process');
const checkEnvVar = require('../utils/checkEnvVar.util');

/**
 * ! PUT YOUR NECESSARY ENVIRONMENT VARS INSIDE EnvList ARRAY
 */
const EnvList = ['PORT', 'DB_NAME', 'DB_URL'];

dotenv.config();

const ENV_BASE_PATH = join(__dirname, '..', `.env.${env.APP_ENV}`);

dotenv.config({
	path: ENV_BASE_PATH,
});

checkEnvVar(EnvList);
