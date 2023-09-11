const express = require('express')
const { getProvincesController, getProvinceController, getRegenciesController, getRegencyController, getDistrictController, getVillagesController, getVillageController, getDistrictsController } = require('../controllers/RegionController.js')

const RegionRouter = express.Router()

RegionRouter.get('/provinces', getProvincesController)
RegionRouter.get('/province/:id', getProvinceController)
RegionRouter.get('/regencies/:id', getRegenciesController)
RegionRouter.get('/regency/:id', getRegencyController)
RegionRouter.get('/districts/:id', getDistrictsController)
RegionRouter.get('/district/:id', getDistrictController)
RegionRouter.get('/villages/:id', getVillagesController)
RegionRouter.get('/village/:id', getVillageController)

module.exports = RegionRouter
