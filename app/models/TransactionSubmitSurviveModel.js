const Sequelize = require('sequelize')
const db = require('../config/database.js')
const { DataTypes } = Sequelize

const TransactionSubmitSurvive = db.define('transactionSubmitSurvive', {
  qtyMember: {
    type: DataTypes.INTEGER
  },
  adminFee: {
    type: DataTypes.INTEGER
  },
  log: {
    type: DataTypes.STRING
  },
  paid: {
    type: DataTypes.INTEGER
  },
  totalPrice: {
    type: DataTypes.INTEGER
  },
  preparationData:{
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true
})

module.exports = TransactionSubmitSurvive
