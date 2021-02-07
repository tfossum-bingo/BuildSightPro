require('dotenv').config()

module.exports = {
  development: {
   // database: "buildsightpro_development",
   //  dialect: "postgres"
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME,
    host: process.env.RDS_HOSTNAME,
    dialect: 'mysql'
  },
  test: {
    database: "buildsightpro_test",
    dialect: "postgres"
  },
  production: {
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME,
    port: process.env.RDS_PORT,
    host: process.env.RDS_HOSTNAME,
    dialect: 'mysql'
  }
}
