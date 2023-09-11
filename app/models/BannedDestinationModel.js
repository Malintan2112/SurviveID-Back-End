const Sequelize = require('sequelize')
const db = require('../config/database.js')

const { DataTypes } = Sequelize

const BannedDestination = db.define('bannedDestinations', {
  startDate: {
    type: DataTypes.DATEONLY
  },
  endDate: {
    type: DataTypes.DATEONLY
  }
}, {
  freezeTableName: true
})

module.exports = BannedDestination
