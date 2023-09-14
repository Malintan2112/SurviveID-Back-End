const isEmpty = require('lodash/isEmpty')
const Destination = require('../models/DestinationModel')
const { succesResponse, errorResponse } = require('./JsonDefault')

const getAllDestination = async (req, res) => {
  try {
    const { categoryId } = req.query
    let where = {}
    if (!isEmpty(categoryId)) {
      where = { ...where, categoryId }
    }
    const destinations = await Destination.findAll({
      where
    })
    res.json(succesResponse(destinations))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

const createDestination = async (req, res) => {
  try {
    const destination = await Destination.create(req.body)
    res.json(succesResponse(destination))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

const updateDestination = async (req, res) => {
  try {
    const destination = await Destination.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(succesResponse(destination))
  } catch (error) {
    res.json(errorResponse(error))
  }
}
module.exports = ({
  getAllDestination, createDestination, updateDestination
})
