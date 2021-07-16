const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const db = require("./app/models")

// const productRoutes = require("./api/routes/products")

const app = express()

var corsOptions = {
  origin: "*",
}

app.use(cors(corsOptions))

app.use(morgan("dev"))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/", (req, res) => {
  res.json({ message: "Welcome to oyasumi-dev application." })
})

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.")
})

require("./app/routes/user.routes")(app)

//Handler cors
// app.use((req, res, next) => {
//   // res.header('Access-Control-Allow-Origin','http://domain.com')
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   )

//   if (req.method === "OPTIONS") {
//     req.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
//     return res.status(200).json({})
//   }

//   next()
// })

//app.use("/products", productRoutes)

app.use((req, res, next) => {
  const error = new Error("Not found")
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message,
    },
  })
})

module.exports = app
