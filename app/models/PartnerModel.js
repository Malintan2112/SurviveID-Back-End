const Sequelize = require('sequelize')
const db = require('../config/database.js')

const Partner = db.define('partners', {
  name: {
    type: Sequelize.DataTypes.STRING
  },
  role: {
    type: Sequelize.ENUM,
    values: ['ADVISOR', 'ADMIN', 'STORE'],
    defaultValue: null
  },
  rating: {
    type: Sequelize.DOUBLE
  }
}, {
  freezeTableName: true
})

module.exports = Partner
