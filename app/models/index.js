const User = require('./UserModel.js')
const Partner = require('./PartnerModel.js')
const Survivor = require('./SurvivorModel.js')

const db = require('../config/database.js')
const Destination = require('./DestinationModel.js')
const Category = require('./CategoryModel.js')
const OrganizerLocation = require('./OrganizerLocationModel.js')
const BannedDestination = require('./BannedDestinationModel.js')
const TransactionSubmitSurvive = require('./TransactionSubmitSurviveModel.js')
const DetailSubmitSurvive = require('./DetailSubmitSurviveModel.js')

const dbAsync = async () => {
  Survivor.belongsTo(User)
  User.hasMany(Survivor)

  Partner.belongsTo(User)
  User.hasMany(Partner)

  Destination.belongsTo(Category)
  Category.hasMany(Destination)

  OrganizerLocation.belongsTo(Destination)
  Destination.hasMany(OrganizerLocation)

  Partner.belongsTo(OrganizerLocation)
  OrganizerLocation.hasMany(Partner)

  BannedDestination.belongsTo(Survivor)
  Survivor.hasMany(BannedDestination)

  BannedDestination.belongsTo(Destination)
  Destination.hasMany(BannedDestination)

  TransactionSubmitSurvive.belongsTo(User)
  User.hasMany(TransactionSubmitSurvive)

  TransactionSubmitSurvive.belongsTo(Partner)
  Partner.hasMany(TransactionSubmitSurvive)

  TransactionSubmitSurvive.belongsTo(OrganizerLocation)
  OrganizerLocation.hasMany(TransactionSubmitSurvive)

  DetailSubmitSurvive.belongsTo(Survivor)
  Survivor.hasMany(DetailSubmitSurvive)

  DetailSubmitSurvive.belongsTo(TransactionSubmitSurvive)
  TransactionSubmitSurvive.hasMany(DetailSubmitSurvive)

  // await db.sync({ force: true })
  await db.sync()
}

dbAsync()

module.exports = { User, Partner, Survivor, Category }
