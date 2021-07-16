module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("orders", {
    order_date: {
      type: Sequelize.DATE(6),
      defaultValue: Sequelize.NOW,
    },
    type_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    customer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    create_user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    edit_user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  })

  return Order
}
