const TransactionSubmitSurvive = require('../models/TransactionSubmitSurviveModel')
const { succesResponse, errorResponse } = require('./JsonDefault')

const createTransactionSubmitSurvive = async (req, res) => {
  try {
    const transactionSubmitSurvive = await TransactionSubmitSurvive.create(req.body)
    res.json(succesResponse(transactionSubmitSurvive))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

const getAllTransactionSubmitSurvive = async (req, res) => {
  try {
    const transactionSubmitSurvives = await TransactionSubmitSurvive.findAll()
    res.json(succesResponse(transactionSubmitSurvives))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

const getTransactionSubmitSurviveById = async (req, res) => {
  try {
    const transactionSubmitSurvive = await TransactionSubmitSurvive.findOne({
      where: {
        id: req.params.id
      }
    })
    res.json(succesResponse(transactionSubmitSurvive))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

const updateTransactionSubmitSurvive = async (req, res) => {
  try {
    const transactionSubmitSurvive = await TransactionSubmitSurvive.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(succesResponse(transactionSubmitSurvive))
  } catch (error) {
    res.json(errorResponse(error))
  }
}

module.exports = {
  createTransactionSubmitSurvive,
  getAllTransactionSubmitSurvive,
  getTransactionSubmitSurviveById,
  updateTransactionSubmitSurvive
}
