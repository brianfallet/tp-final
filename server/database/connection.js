import { Sequelize } from 'sequelize'

const database = process.env.DB_NAME
const username = process.env.DB_USER
const password = process.env.DB_PASSWORD

export const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: 'mysql',
    dialectModule: 'mysql2',
    port: 3306
})

