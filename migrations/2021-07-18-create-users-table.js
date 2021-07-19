module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "users",
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
        username: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        role_id: {
          type: Sequelize.INTEGER,
          defaultValue: 1,
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
    return queryInterface.dropTable("users")
  },
}
