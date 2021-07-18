"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("prefixes", [
      {
        name: "นาย",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "นาง",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "นางสาว",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("prefixes", null, {
      restartIdentity: true,
    })
  },
}
