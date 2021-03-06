module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("products", {
    type_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sku: Sequelize.STRING,
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    detail: Sequelize.STRING,
    remain: {
      type: Sequelize.DOUBLE,
      defaultValue: 1,
    },
    unit_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    cost_price: {
      type: Sequelize.DOUBLE,
      defaultValue: 1,
    },
    selling_price: {
      type: Sequelize.DOUBLE,
      defaultValue: 1,
    },
    wholesale_price: {
      type: Sequelize.DOUBLE,
      defaultValue: 1,
    },
  })

  return Product
}
