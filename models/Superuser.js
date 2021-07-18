module.exports = (sequelize, DataTypes) => {
  const Superuser = sequelize.define(
    "superuser",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("admin", "restricted"),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  )
  return Superuser
}
