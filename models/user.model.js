module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
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

  return User
}
