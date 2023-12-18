import { Sequelize } from 'sequelize'

const database = process.env.DB_NAME
const username = process.env.DB_USER
const password = process.env.DB_PASSWORD

const dbSettings = {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
}

export const sequelize = new Sequelize(database, username, password, dbSettings)

