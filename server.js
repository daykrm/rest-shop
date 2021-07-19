const express = require("express")
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

const app = express()

var corsOptions = {
  origin: "*",
}

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(express.json()) /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({ extended: true })
) /* bodyParser.urlencoded() is deprecated */

// const db = require("./models")

// const User = db.users

// db.sequelize.sync()

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync")
// })

// simple route
app.get("/", (req, res) => {
  // console.log("DB MODEL", db)
  res.json({ message: "Welcome to oyasumi-dev application." })
})

require("./app/routes/user.routes")(app)

// require("./app/routes/user.routes")(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
