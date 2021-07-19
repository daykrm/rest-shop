"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "customers",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
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
    return queryInterface.dropTable("customers")
  },
}
