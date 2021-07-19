"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "payment_history",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
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
    return queryInterface.dropTable("payment_history")
  },
}
