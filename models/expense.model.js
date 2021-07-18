module.exports = (sequelize, Sequelize) => {
  const Expense = sequelize.define("expenses", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  })

  return Expense
}
