const OrganizerLocation = require('../models/OrganizerLocationModel')
const { succesResponse, errorResponse } = require('./JsonDefault')

const getAllOrganizerLocation = async (req, res) => {
  try {
    const organizerLocation = await OrganizerLocation.findAll()
    res.json(succesResponse(organizerLocation))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

const createOrganizerLocation = async (req, res) => {
  try {
    const organizerLocation = await OrganizerLocation.create(req.body)

    res.json(succesResponse(organizerLocation))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

const updateOrganizerLocation = async (req, res) => {
  try {
    const organizerLocation = await OrganizerLocation.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(succesResponse(organizerLocation))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

const getAllOrganizerLocationByDestinationId = async (req, res) => {
  try {
    const organizerLocation = await OrganizerLocation.findAll({
      where: {
        destinationId: req.params.id
      }
    })
    res.json(succesResponse(organizerLocation))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

module.exports = { getAllOrganizerLocation, createOrganizerLocation, updateOrganizerLocation, getAllOrganizerLocationByDestinationId }
