module.exports = (sequelize, Sequelize) => {
  const OrderType = sequelize.define("order_type", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  })

  return OrderType
}
