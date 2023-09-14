const { Survivor, User } = require('../models')
const { succesResponse, errorResponse } = require('./JsonDefault')

const addSurvivor = async (req, res) => {
  try {
    const survivor = await Survivor.create(req.body)
    res.json(succesResponse(survivor))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

const getAllSurvivor = async (req, res) => {
  try {
    let where = {}
    const { userId } = req.query
    if (userId) {
      where = { ...where, userId }
    }
    const survivors = await Survivor.findAll({
      where,
      include: [{
        model: User,
        as: 'user',
        attributes: { exclude: ['password', 'refresh_token'] }
      }
      ]
    })
    res.json(succesResponse(survivors))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

const getSurvivorById = async (req, res) => {
  try {
    const survivors = await Survivor.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: User,
        as: 'user',
        attributes: { exclude: ['password', 'refresh_token'] }
      }
      ]
    })
    res.json(succesResponse(survivors))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

const updateSurvivor = async (req, res) => {
  try {
    const survivor = await Survivor.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(succesResponse(survivor))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

module.exports = {
  addSurvivor,
  getAllSurvivor,
  getSurvivorById,
  updateSurvivor
}
