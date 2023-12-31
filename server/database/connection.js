import { config } from 'dotenv'
import { Sequelize } from 'sequelize'
import mysql2 from 'mysql2'

config()

const database = process.env.DB_NAME
const username = process.env.DB_USER
const password = process.env.DB_PASSWORD

const sequelize = new Sequelize(database, username, password, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    dialectModule: mysql2
})

export default sequelize

