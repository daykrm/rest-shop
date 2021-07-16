const { body, validationResult } = require("express-validator")

const db = require("../models")
const User = db.users
const Op = db.Sequelize.Op

exports.create = (req, res) => {
  const user = {
    prefix_id: req.body.prefix_id,
    fname: req.body.fname,
    lname: req.body.lname,
    username: req.body.username,
    password: req.body.password,
  }

  User.create(user)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating user",
      })
    })
}

exports.findAll = (req, res) => {
  User.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users",
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id

  User.findByPk(id)
    .then((data) => {
      if (!data) res.send(`User id (${id}) does not exist !!`)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      })
    })
}

exports.update = (req, res) => {}

exports.delete = (req, res) => {}

exports.deleteAll = (req, res) => {}

exports.validateUser = [
  body("prefix_id").isNumeric().withMessage("Please select prefix").bail(),
  body("fname")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("First name can not be empty!")
    .bail(),
  body("lname")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Last name can not be empty!")
    .bail(),
  body("username")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Username can not be empty!")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Minimum 6 characters required!")
    .bail(),
  body("password")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Password can not be empty!")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Minimum 6 characters required!")
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array(),
      })
    }
    next()
  },
]
