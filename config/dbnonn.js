import { Sequelize } from "sequelize";
import "dotenv/config";


const sequelizeConncetion = new Sequelize(
process.env.DB_NAME,
process.env.DB_USER,
process.env.DB_PASSWORD,
{
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});

sequelizeConncetion.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


export default sequelizeConncetion;