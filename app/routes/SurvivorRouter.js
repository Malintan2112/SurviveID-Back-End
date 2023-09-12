const express = require('express')
const { getAllSurvivor, addSurvivor, updateSurvivor, getAllSurvivorByUserId } = require('../controllers/SurvivorController')
const verifyToken = require('../middleware/VerifyToken')

const SurvivorRouter = express.Router()

SurvivorRouter.get('/', verifyToken, getAllSurvivor)
SurvivorRouter.post('/', verifyToken, addSurvivor)
SurvivorRouter.put('/:id', verifyToken, updateSurvivor)
SurvivorRouter.get('/user/:id', verifyToken, getAllSurvivorByUserId)

module.exports = SurvivorRouter
