module.exports = (sequelize, Sequelize) => {
  const Prefix = sequelize.define("prefixes", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  })

  return Prefix
}
