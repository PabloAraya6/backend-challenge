require('dotenv').config()

const config = {
    DATABASE_HOST: 'localhost' || procces.env.DATABASE_HOST,
    DATABASE_USER: 'root' || procces.env.DATABASE_USER,
    DATABASE_PASSWORD: 'admin' || procces.env.DATABASE_PASSWORD,
    DATABASE_NAME: 'enviame' || procces.env.DATABASE_NAME,
    PORT: '5001' || procces.env.PORT,
}

module.exports = config