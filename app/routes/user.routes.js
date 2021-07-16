module.exports = (app) => {
  const users = require("../controllers/user.controller")
  const auth = require("../middleware/auth.middleware")

  const router = require("express").Router()

  // Create a new User
  router.post("/", users.validateUser, users.create)

  // Retrieve all users
  router.get("/", auth, users.findAll)

  // Retrieve a single User with id
  router.get("/:id", users.findOne)

  // Update a User with id
  router.put("/:id", users.validateUser, users.update)

  // Delete a User with id
  router.delete("/:id", users.delete)

  // Delete all users
  router.delete("/", users.deleteAll)

  router.post("/login", users.login)

  app.use("/api/users", router)
}
