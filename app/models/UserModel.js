const Sequelize = require('sequelize')
const db = require('../config/database.js')

const { DataTypes } = Sequelize

const User = db.define('users', {
  email: {
    type: DataTypes.STRING(100)
  },
  phone: {
    type: DataTypes.STRING(20)
  },
  // End Personal Information
  userName: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  imgProfile: {
    type: DataTypes.STRING
  },
  refresh_token: {
    type: DataTypes.TEXT
  },
  isEmailVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0
  },
  isPhoneVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0
  }
}, {
  freezeTableName: true
})

module.exports = User
