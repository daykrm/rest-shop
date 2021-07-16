const { body, validationResult } = require("express-validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const db = require("../models")
const User = db.users
const Op = db.Sequelize.Op

exports.login = (req, res) => {
  User.findOne({ where: { username: req.body.username } })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed",
        })
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed",
            error: err.message,
          })
        }
        if (result) {
          const token = jwt.sign(
            {
              username: user.username,
              userId: user.id,
            },
            process.env.JWT_KEY,
            {
              expiresIn: "1h",
            }
          )
          return res.status(200).json({
            message: "Auth successful",
            token: token,
          })
        }
        res.status(401).json({
          message: "Auth failed",
        })
      })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: err,
      })
    })
}

exports.create = (req, res) => {
  User.findOne({ where: { username: req.body.username } }).then((user) => {
    if (user) {
      return res.status(409).json({
        message: "Username exists",
      })
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err,
          })
        } else {
          const user = {
            prefix_id: req.body.prefix_id,
            fname: req.body.fname,
            lname: req.body.lname,
            username: req.body.username,
            password: hash,
          }

          User.create(user)
            .then((data) => {
              res.send(data)
            })
            .catch((err) => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating user",
              })
            })
        }
      })
    }
  })

  //   User.findOne({ where: { username: req.body.username } }).then((user) => {})
}

exports.findAll = (req, res) => {
  //   const username = req.query.username
  //   var condition = username ? { username: { [Op.like]: `%${username}%` } } : null

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

exports.update = (req, res) => {
  const id = req.params.id

  User.update(req.body, { where: { id: id } })
    .then((result) => {
      if (result == 1) {
        res.send({
          message: "User was updated successfully.",
        })
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: "Error updating User with id=" + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id

  User.destroy({ where: { id: id } })
    .then((result) => {
      if (result == 1) {
        res.send({
          message: "User was deleted successfully!",
        })
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Could not delete User with id=" + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false,
  })
    .then((result) => {
      res.send({
        message: `${result} Users were deleted successfully!`,
      })
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message || "Some error occurred while removing all users.",
      })
    })
}

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
