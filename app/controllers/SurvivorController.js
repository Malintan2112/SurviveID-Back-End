const { Survivor, User } = require('../models')
const { succesResponse, errorResonse } = require('./JsonDefault')

const addSurvivor = async (req, res) => {
  try {
    const survivor = await Survivor.create(req.body)
    res.json(succesResponse(survivor))
  } catch (error) {
    res.json(errorResonse(error))
  }
}

const getAllSurvivor = async (req, res) => {
  try {
    const survivors = await Survivor.findAll({
      include: [{
        model: User,
        as: 'user',
        attributes: { exclude: ['password', 'refresh_token'] }
      }
      ]
    })
    res.json(succesResponse(survivors))
  } catch (error) {
    res.json(errorResonse(error))
  }
}

const getAllSurvivorByUserId = async (req, res) => {
  try {
    const survivors = await Survivor.findAll({
      where: {
        userId: req.params.id
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
    res.json(errorResonse(error))
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
    res.json(errorResonse(error))
  }
}

module.exports = {
  addSurvivor,
  getAllSurvivor,
  getAllSurvivorByUserId,
  updateSurvivor
}
