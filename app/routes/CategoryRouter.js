const express = require('express')
const { getAllCategory, createCategory, updateCategory, getAllDestinationByCategoryId } = require('../controllers/CategoryController')
const verifyToken = require('../middleware/VerifyToken')

const CategoryRouter = express.Router()

CategoryRouter.get('/', getAllCategory)
CategoryRouter.post('/', verifyToken, createCategory)
CategoryRouter.put('/:id', verifyToken, updateCategory)

CategoryRouter.get('/destination/:id', getAllDestinationByCategoryId)

module.exports = CategoryRouter
