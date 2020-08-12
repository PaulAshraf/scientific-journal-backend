const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    mongoUsername: process.env.MONGO_USERNAME,
    mongoPassword: process.env.MONGO_PASSWORD,
    port: process.env.PORT,
}