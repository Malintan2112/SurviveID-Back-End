const express = require('express')
const { getAllTransactionSubmitSurvive, getTransactionSubmitSurviveById, createTransactionSubmitSurvive, updateTransactionSubmitSurvive } = require('../controllers/TransactionSubmitSurviveController')
const verifyToken = require('../middleware/VerifyToken')

const TransactionSubmitSurviveRouter = express.Router()

TransactionSubmitSurviveRouter.get('/', verifyToken, getAllTransactionSubmitSurvive)
TransactionSubmitSurviveRouter.get('/:id', verifyToken, getTransactionSubmitSurviveById)
TransactionSubmitSurviveRouter.post('/', verifyToken, createTransactionSubmitSurvive)
TransactionSubmitSurviveRouter.put('/', verifyToken, updateTransactionSubmitSurvive)

module.exports = TransactionSubmitSurviveRouter
