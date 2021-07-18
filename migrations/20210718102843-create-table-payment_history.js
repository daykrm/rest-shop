"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("payment_history", {
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      payment_type: {
        // เงินสด หรือ โอนเงิน
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      payment_date: {
        type: Sequelize.DATE(6),
        defaultValue: Sequelize.NOW,
      },
      amount: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
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
    return queryInterface.dropTable("payment_history")
  },
}
