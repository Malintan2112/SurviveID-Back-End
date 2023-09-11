const express = require('express')
const { getAllDestination, createDestination, updateDestination } = require('../controllers/DestinationController')

const DestinationRouter = express.Router()

DestinationRouter.get('/', getAllDestination)
DestinationRouter.post('/', createDestination)
DestinationRouter.put('/:id', updateDestination)

module.exports = DestinationRouter
