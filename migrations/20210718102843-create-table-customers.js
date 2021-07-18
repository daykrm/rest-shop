"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("customers", {
      prefix_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
      },
      img: {
        type: Sequelize.STRING,
      },
      debts: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("customers")
  },
}
