const Sequelize = require('sequelize')
const db = require('../config/database.js')
const { DataTypes } = Sequelize

const DetailSubmitSurvive = db.define('detailSubmitSurvive', {
  organizerName: {
    type: DataTypes.STRING
  },
  log: {
    type: DataTypes.STRING
  },
  claimedXp: {
    type: DataTypes.BOOLEAN
  },
  preparationData: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true
})

module.exports = DetailSubmitSurvive
