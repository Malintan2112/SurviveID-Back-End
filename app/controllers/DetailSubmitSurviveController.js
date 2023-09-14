const DetailSubmitSurvive = require('../models/DetailSubmitSurviveModel')
const { succesResponse, errorResponse } = require('./JsonDefault')

const getAllDetailSubmitSurvive = async (req, res) => {
  try {
    const detailSubmitSurvives = await DetailSubmitSurvive.findAll()
    res.json(succesResponse(detailSubmitSurvives))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

const createDetailSubmitSurvive = async (req, res) => {
  try {
    const detailSubmitSurvive = await DetailSubmitSurvive.create(req.body)
    res.json(succesResponse(detailSubmitSurvive))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

const updateDetailSubmitSurvive = async (req, res) => {
  try {
    const detailSubmitSurvive = await DetailSubmitSurvive.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(succesResponse(detailSubmitSurvive))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

const getDetailSubmitSurviveById = async (req, res) => {
  try {
    const detailSubmitSurvive = await DetailSubmitSurvive.findOne({
      where: {
        id: req.params.id
      }
    })
    res.json(succesResponse(detailSubmitSurvive))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

module.exports = {
  getAllDetailSubmitSurvive,
  createDetailSubmitSurvive,
  updateDetailSubmitSurvive,
  getDetailSubmitSurviveById
}
