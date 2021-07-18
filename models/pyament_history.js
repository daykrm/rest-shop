module.exports = (sequelize, Sequelize) => {
  const PaymentHistory = sequelize.define("payment_history", {
    order_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    payment_type: {
      // เงินสด หรือ โอนเงิน
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    payment_date: {
      type: Sequelize.DATE(6),
      defaultValue: Sequelize.NOW,
    },
    amount: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
    },
    create_user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    edit_user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  })

  return PaymentHistory
}
