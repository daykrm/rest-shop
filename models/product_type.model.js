module.exports = (sequelize, Sequelize) => {
  const ProductType = sequelize.define("product_type", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  })

  return ProductType
}
