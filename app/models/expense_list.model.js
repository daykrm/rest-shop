module.exports = (sequelize, Sequelize) => {
  const ExpenseList = sequelize.define("expense_list", {
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
  })

  return ExpenseList
}
