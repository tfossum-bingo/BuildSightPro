require('dotenv').config()

module.exports = {
  "development": {
    "database": "buildsightpro_development",
    "dialect": "postgres"
  },
  "test": {
    "database": "buildsightpro_test",
    "dialect": "postgres"
  },
  "production": {
    // use_env_variable: 'DATABASE_URL',
    // "dialect": "postgres",
    // dialectOptions: {
    //   ssl: {
    //     rejectUnauthorized: false,
    //     require: true
    //   }
    // }
    "database": "buildsightpro_production",
    "dialect": "postgres"
  }
}
