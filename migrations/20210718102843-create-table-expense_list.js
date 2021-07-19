"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "expense_list",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        expense_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        amount: {
          type: Sequelize.DOUBLE,
          defaultValue: 0,
        },
        expense_date: {
          type: Sequelize.DATE(6),
          defaultValue: Sequelize.NOW,
        },
        img: Sequelize.STRING,
        remark: Sequelize.STRING,
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
    return queryInterface.dropTable("expense_list")
  },
}
