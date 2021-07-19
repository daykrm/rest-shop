"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "order_detail",
      {
        id: {
          type: Sequelize.INTEGER,
          primary: true,
          autoincrement: true,
        },
        order_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        product_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        amount: {
          type: Sequelize.DOUBLE,
          default: 1,
        },
        unit_price: {
          type: Sequelize.DOUBLE,
          default: 1,
        },
        create_user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        edit_user_id: {
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
    return queryInterface.dropTable("order_detail")
  },
}
