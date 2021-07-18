module.exports = (sequelize, Sequelize) => {
  const ProductUnit = sequelize.define("product_unit", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  })

  return ProductUnit
}
