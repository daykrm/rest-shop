"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = process.env.SEED_SUPERUSER_PASSWORD || "defaultpassword"
    return queryInterface.bulkInsert("user", [
      {
        email: "admin@agenkan.com",
        encryptedPassword: "yourpasswordehre",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user", { email: "admin@agenkan.com" }, {})
  },
}
