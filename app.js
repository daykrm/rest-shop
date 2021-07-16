const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

const productRoutes = require('./api/routes/products')

mongoose.connect('mongodb+srv://foto-shop:' + process.env.MONGO_ATLAS_PW + '@foto-farm.bcher.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useMongoClient: true
})

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin','http://domain.com')
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    
    if (req.method === 'OPTIONS') {
        req.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }

    next()
})

app.use('/products', productRoutes)

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app