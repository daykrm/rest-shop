"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("receipts", {
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      reciept_date: {
        type: Sequelize.DATE(6),
        defaultValue: Sequelize.NOW,
      },
      remark: Sequelize.STRING,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("receipts")
  },
}
