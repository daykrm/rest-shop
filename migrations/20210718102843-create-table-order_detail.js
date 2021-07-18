"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("order_detail", {
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
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("order_detail")
  },
}
