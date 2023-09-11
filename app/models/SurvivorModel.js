const Sequelize = require('sequelize')
const db = require('../config/database.js')

const { DataTypes } = Sequelize

const Survivor = db.define('survivors', {
  name: {
    type: DataTypes.STRING(100)
  },
  gender: {
    type: Sequelize.ENUM,
    values: ['MEN', 'WOMEN', 'OTHERS'],
    defaultValue: null
  },
  idCardType: {
    type: Sequelize.ENUM,
    values: ['KTP', 'SIM', 'KIA', 'KARTU PELAJAR', 'PASPOR'],
    defaultValue: null
  },
  idCardImage: {
    type: DataTypes.STRING
  },
  idCardData: {
    type: DataTypes.STRING
  },
  dateOfBirth: {
    type: DataTypes.DATE
  },
  weight: {
    type: DataTypes.INTEGER
  },
  height: {
    type: DataTypes.INTEGER
  },
  nameEmergencyPhone: {
    type: DataTypes.STRING
  },
  relationEmergencyPhone: {
    type: DataTypes.STRING
  },
  emergencyPhone: {
    type: DataTypes.STRING
  },
  idProvince: {
    type: DataTypes.STRING
  },
  idRegency: {
    type: DataTypes.STRING
  },
  idDistrict: {
    type: DataTypes.STRING
  },
  idVillage: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
  pointXp: {
    type: DataTypes.INTEGER
  },
  pointMerrit: {
    type: DataTypes.INTEGER
  }
}, {
  freezeTableName: true
})

module.exports = Survivor
