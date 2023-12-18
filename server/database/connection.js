import { Sequelize } from 'sequelize'

const database = process.env.DB_NAME
const username = process.env.DB_USER
const password = process.env.DB_PASSWORD

export const sequelize = new Sequelize(database, username, password, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT
})

