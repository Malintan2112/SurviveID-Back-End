const { Category } = require('../models')
const Destination = require('../models/DestinationModel')
const { succesResponse, errorResponse } = require('./JsonDefault')

const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.findAll()
    res.json(succesResponse(categories))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body)
    res.json(succesResponse(category))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

const updateCategory = async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(succesResponse(category))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

const getAllDestinationByCategoryId = async (req, res) => {
  try {
    const destinations = await Destination.findAll({
      where: {
        categoryId: req.params.id
      }
    })
    res.json(succesResponse(destinations))
  } catch (error) {
    res.json(errorResponse(error))
  }
}
module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  getAllDestinationByCategoryId
}
