module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "roles",
      {
        id: {
          type: Sequelize.INTEGER,
          primary: true,
          autoincrement: true,
        },
        name: {
          type: Sequelize.STRING,
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("roles")
  },
}
