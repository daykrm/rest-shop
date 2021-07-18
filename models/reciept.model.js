module.exports = (sequelize, Sequelize) => {
  const Reciept = sequelize.define("receipts", {
    order_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    reciept_date: {
      type: Sequelize.DATE(6),
      defaultValue: Sequelize.NOW,
    },
    remark: Sequelize.STRING,
  })

  return Reciept
}
