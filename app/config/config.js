require('dotenv').config()

const env = {
    API_KEY: process.env.API_KEY || 'ea670047974b650bbcba5dd759baf1ed',
    DATABASE_HOST: process.env.DATABASE_HOST || 'db_api',
    DATABASE_NAME: process.env.DATABASE_NAME || 'enviame',
    DATABASE_USER: process.env.DATABASE_USER || 'root',
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'admin',
    PORT: process.env.PORT || '8000',
}

module.exports = env