module.exports = (sequelize, Sequelize) => {
  const ProductImg = sequelize.define("product_img", {
    product_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    img_path: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  })

  return ProductImg
}
