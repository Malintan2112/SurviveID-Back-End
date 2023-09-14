const express = require('express')
const verifyToken = require('../middleware/VerifyToken')

const { getAllPartner, getAllPartnerId, createPartner, updatePartner } = require('../controllers/PartnerController')

const PartnerRouter = express.Router()

PartnerRouter.get('/', verifyToken, getAllPartner)
PartnerRouter.get('/:id', verifyToken, getAllPartnerId)
PartnerRouter.post('/', verifyToken, createPartner)
PartnerRouter.put('/:id', verifyToken, updatePartner)

module.exports = PartnerRouter
