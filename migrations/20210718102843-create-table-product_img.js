"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("product_img", {
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      img_path: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("product_img")
  },
}
