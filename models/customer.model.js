module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customers", {
    prefix_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    fname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
    },
    img: {
      type: Sequelize.STRING,
    },
    debts: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
    },
  })

  return Customer
}
