const Sequelize = require("sequelize")

const dbConfig = require("../config/db.config")

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  // operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require("./user.model")(sequelize, Sequelize)
db.roles = require("./role.model")(sequelize, Sequelize)
db.prefixes = require("./prefix.model")(sequelize, Sequelize)

// db.products = require("./product.model.js")(sequelize, Sequelize)

module.exports = db
