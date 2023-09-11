const Sequelize = require('sequelize')
const db = require('../config/database.js')

const { DataTypes } = Sequelize

const Category = db.define('categories', {

  categoryName: {
    type: DataTypes.STRING
  },
  categoryImage: {
    type: DataTypes.STRING
  },
  categoryDescription: {
    type: DataTypes.STRING
  },
  categoryIcon: {
    type: DataTypes.STRING
  },
  isShow: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0
  }
}, {
  freezeTableName: true
})

module.exports = Category
