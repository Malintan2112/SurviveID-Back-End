const express = require('express')
const { getAllDestination, createDestination, updateDestination } = require('../controllers/DestinationController')
const verifyToken = require('../middleware/VerifyToken')

const DestinationRouter = express.Router()

DestinationRouter.get('/', getAllDestination)
DestinationRouter.post('/', verifyToken, createDestination)
DestinationRouter.put('/:id', verifyToken, updateDestination)

module.exports = DestinationRouter
