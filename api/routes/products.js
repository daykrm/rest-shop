const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    })
})

//test
router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: 'Handling POST requests to /products',
        createdProduct: product,
    })
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID'
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})

router.patch('/:id', (req, res, next) => {
    const id = req.params.id
    res.status(200).json({
        message: 'Updated product!',
        productId: id
    })
})

router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    res.status(200).json({
        message: 'Deleted product!',
        productId: id
    })
})

module.exports = router