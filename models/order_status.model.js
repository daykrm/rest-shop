module.exports = (sequelize, Sequelize) => {
  const OrderStatus = sequelize.define("order_status", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  })

  return OrderStatus
}
