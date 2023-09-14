const Sequelize = require('sequelize')
const db = require('../config/database.js')

const { DataTypes } = Sequelize

const OrganizerLocation = db.define('organizerlocations', {
  organizerLocationName: {
    type: DataTypes.STRING
  },
  deposit: {
    type: DataTypes.INTEGER
  },
  address: {
    type: DataTypes.STRING
  },
  latitude: {
    type: DataTypes.STRING
  },
  longitude: {
    type: DataTypes.STRING
  },
  rating: {
    type: DataTypes.DOUBLE
  },
  idDistrict: {
    type: DataTypes.STRING
  },
  idVillage: {
    type: DataTypes.STRING
  },
  isShow: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0
  }
}, {
  freezeTableName: true
})

module.exports = OrganizerLocation
