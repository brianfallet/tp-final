import { config } from 'dotenv'
import { Sequelize } from 'sequelize'

config()

const database = process.env.DB_NAME
const username = process.env.DB_USER
const password = process.env.DB_PASSWORD

const sequelize = new Sequelize(database, username, password, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT
})

export default sequelize

