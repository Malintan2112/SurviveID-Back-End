const Sequelize = require('sequelize')
const db = require('../config/database.js')

const { DataTypes } = Sequelize

const Destination = db.define('destinations', {
  destinationName: {
    type: DataTypes.STRING
  },
  idProvince: {
    type: DataTypes.STRING
  },
  idRegency: {
    type: DataTypes.STRING
  },
  isShow: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0
  }
}, {
  freezeTableName: true
})

module.exports = Destination
