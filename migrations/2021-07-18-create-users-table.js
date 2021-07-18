module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
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
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users")
  },
}
