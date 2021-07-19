"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "products",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        type_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        sku: Sequelize.STRING,
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        detail: Sequelize.STRING,
        remain: {
          type: Sequelize.DOUBLE,
          defaultValue: 1,
        },
        unit_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        cost_price: {
          type: Sequelize.DOUBLE,
          defaultValue: 1,
        },
        selling_price: {
          type: Sequelize.DOUBLE,
          defaultValue: 1,
        },
        wholesale_price: {
          type: Sequelize.DOUBLE,
          defaultValue: 1,
        },
        createdAt: { type: Sequelize.DATE(6), defaultValue: Sequelize.NOW },
        updatedAt: { type: Sequelize.DATE(6), defaultValue: Sequelize.NOW },
      },
      {
        hooks: {
          beforeCreate: function (model, options, fn) {
            model.createdAt = new Date()
            model.updatedAt = new Date()
            fn(null, model)
          },
          beforeUpdate: function (model, options, fn) {
            model.updatedAt = new Date()
            fn(null, model)
          },
        },
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("products")
  },
}
