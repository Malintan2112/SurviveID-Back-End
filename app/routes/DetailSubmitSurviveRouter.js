const express = require('express')
const { getAllDetailSubmitSurvive, getDetailSubmitSurviveById, createDetailSubmitSurvive, updateDetailSubmitSurvive } = require('../controllers/DetailSubmitSurviveController')

const DetailSubmitSurviveRouter = express.Router()

DetailSubmitSurviveRouter.get('/', getAllDetailSubmitSurvive)
DetailSubmitSurviveRouter.get('/:id', getDetailSubmitSurviveById)
DetailSubmitSurviveRouter.post('/', createDetailSubmitSurvive)
DetailSubmitSurviveRouter.put('/:id', updateDetailSubmitSurvive)

module.exports = DetailSubmitSurviveRouter
