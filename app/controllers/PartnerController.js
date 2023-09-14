const { Partner, User } = require('../models')
const { succesResponse, errorResponse } = require('./JsonDefault')

const getAllPartner = async (req, res) => {
  try {
    let where = {}
    const { userId } = req.query
    if (userId) {
      where = { ...where, userId }
    }
    const partners = await Partner.findAll({
      where,
      include: [{
        model: User,
        as: 'user',
        attributes: { exclude: ['password', 'refresh_token'] }
      }]
    })
    res.json(succesResponse(partners))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

const getAllPartnerId = async (req, res) => {
  try {
    const partners = await Partner.findAll({
      where: {
        id: req.params.id
      }
    })
    res.json(succesResponse(partners))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

const createPartner = async (req, res) => {
  try {
    const partner = await Partner.create(req.body)
    res.json(succesResponse(partner))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

const updatePartner = async (req, res) => {
  try {
    const partner = await Partner.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(succesResponse(partner))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

module.exports = {
  getAllPartner,
  getAllPartnerId,
  createPartner,
  updatePartner
}
