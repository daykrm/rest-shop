"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "receipts",
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
        reciept_date: {
          type: Sequelize.DATE(6),
          defaultValue: Sequelize.NOW,
        },
        remark: Sequelize.STRING,
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
    return queryInterface.dropTable("receipts")
  },
}
