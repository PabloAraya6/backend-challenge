require('dotenv').config()

const env = {
    API_KEY: 'ea670047974b650bbcba5dd759baf1ed' || process.env.API_KEY,
    DATABASE_HOST: 'localhost' || process.env.DATABASE_HOST,
    DATABASE_NAME: 'enviame' || process.env.DATABASE_NAME,
    DATABASE_USER: 'root' || process.env.DATABASE_USER,
    DATABASE_PASSWORD: 'admin' || process.env.DATABASE_PASSWORD,
    PORT: '5001' || procces.env.PORT,
}

module.exports = env