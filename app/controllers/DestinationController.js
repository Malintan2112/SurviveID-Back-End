const Destination = require('../models/DestinationModel')
const { succesResponse, errorResonse } = require('./JsonDefault')

const getAllDestination = async (req, res) => {
  try {
    const destinations = await Destination.findAll()
    res.json(succesResponse(destinations))
  } catch (error) {
    res.json(errorResonse(error))
  }
}

const createDestination = async (req, res) => {
  try {
    const destination = await Destination.create(req.body)
    res.json(succesResponse(destination))
  } catch (error) {
    res.json(errorResonse(error))
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
    res.json(errorResonse(error))
  }
}
module.exports = ({
  getAllDestination, createDestination, updateDestination
})
