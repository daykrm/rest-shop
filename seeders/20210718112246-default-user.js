"use strict"

const bcrypr = require("bcrypt")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = bcrypr.hashSync("123456", 10)

    return queryInterface.bulkInsert("users", [
      {
        id: 1,
        prefix_id: 1,
        fname: "อนุชิต",
        lname: "คังดงเค็ง",
        username: "daykrm",
        password: password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        prefix_id: 1,
        fname: "อัครวิทย์",
        lname: "ศรีวิเศษ",
        username: "akarawit",
        password: password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, { restartIdentity: true })
  },
}
