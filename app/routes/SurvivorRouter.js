const express = require('express')
const { getAllSurvivor, addSurvivor, updateSurvivor, getSurvivorById } = require('../controllers/SurvivorController')
const verifyToken = require('../middleware/VerifyToken')

const SurvivorRouter = express.Router()

SurvivorRouter.get('/', verifyToken, getAllSurvivor)
SurvivorRouter.post('/', verifyToken, addSurvivor)
SurvivorRouter.put('/:id', verifyToken, updateSurvivor)
SurvivorRouter.get('/:id', verifyToken, getSurvivorById)

module.exports = SurvivorRouter
