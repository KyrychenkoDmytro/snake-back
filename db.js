import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});

export default sequelize;