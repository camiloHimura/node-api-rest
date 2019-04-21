
const env = process.env.NODE_ENV || 'dev';

const environmentConfig = require(`./${env}`).config;

const generalConfig = {
    env,
    port: process.env.PORT || 8080
}

module.exports = Object.assign(generalConfig, environmentConfig);