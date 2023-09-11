const express = require('express')
const { getAllCategory, createCategory, updateCategory, getAllDestinationByCategoryId } = require('../controllers/CategoryController')

const CategoryRouter = express.Router()

CategoryRouter.get('/', getAllCategory)
CategoryRouter.post('/', createCategory)
CategoryRouter.put('/:id', updateCategory)

CategoryRouter.get('/destination/:id', getAllDestinationByCategoryId)

module.exports = CategoryRouter
