const express = require('express')
const { getAllOrganizerLocation, getAllOrganizerLocationByDestinationId, createOrganizerLocation, updateOrganizerLocation } = require('../controllers/OrganizerLocationController')
const verifyToken = require('../middleware/VerifyToken')

const OrganizerLocationRouter = express.Router()

OrganizerLocationRouter.get('/', getAllOrganizerLocation)
OrganizerLocationRouter.get('/destination/:id', getAllOrganizerLocationByDestinationId)
OrganizerLocationRouter.post('/', verifyToken, createOrganizerLocation)
OrganizerLocationRouter.put('/', verifyToken, updateOrganizerLocation)

module.exports = OrganizerLocationRouter
