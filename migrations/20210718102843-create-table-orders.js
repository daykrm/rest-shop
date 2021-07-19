"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "orders",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        order_date: {
          type: Sequelize.DATE(6),
          defaultValue: Sequelize.NOW,
        },
        type_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        customer_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        create_user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        edit_user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        status_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
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
    return queryInterface.dropTable("orders")
  },
}
