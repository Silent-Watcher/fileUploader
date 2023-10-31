'use strict';
const { env } = require('node:process');

const checkEnvVar = (envList) => {
	let notDefinedVars = envList.filter((envVar) => !env[envVar]);
	if (notDefinedVars.length > 0)
		throw new Error(
			`following env vars are missing : \n ${notDefinedVars.join(', ')}`,
		);
};

module.exports = checkEnvVar;
