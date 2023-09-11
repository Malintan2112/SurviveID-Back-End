const { getProvinces, getProvince, getRegencies, getRegency, getDistricts, getDistrict, getVillages, getVillage } = require('../misc/RegionHelpers.js')
const { errorResonse, succesResponse } = require('./JsonDefault.js')

// For data res needs
const getProvincesController = async (req, res) => {
  try {
    return res.status(200).json(succesResponse({ data: getProvinces() }))
  } catch (error) {
    return res.status(500).json(errorResonse(error))
  }
}

const getProvinceController = async (req, res) => {
  try {
    return res.status(200).json(succesResponse({ data: getProvince(req.params.id) }))
  } catch (error) {
    return res.status(500).json(errorResonse(error))
  }
}

const getRegenciesController = async (req, res) => {
  try {
    return res.status(200).json(succesResponse({ data: getRegencies(req.params.id) }))
  } catch (error) {
    return res.status(500).json(errorResonse(error))
  }
}

const getRegencyController = async (req, res) => {
  try {
    return res.status(200).json(succesResponse({ data: getRegency(req.params.id) }))
  } catch (error) {
    return res.status(500).json(errorResonse(error))
  }
}

const getDistrictsController = async (req, res) => {
  try {
    return res.status(200).json(succesResponse({ data: getDistricts(req.params.id) }))
  } catch (error) {
    return res.status(500).json(errorResonse(error))
  }
}

const getDistrictController = async (req, res) => {
  try {
    return res.status(200).json(succesResponse({ data: getDistrict(req.params.id) }))
  } catch (error) {
    return res.status(500).json(errorResonse(error))
  }
}

const getVillagesController = async (req, res) => {
  try {
    return res.status(200).json(succesResponse({ data: getVillages(req.params.id) }))
  } catch (error) {
    return res.status(500).json(errorResonse(error))
  }
}

const getVillageController = async (req, res) => {
  try {
    return res.status(200).json(succesResponse({ data: getVillage(req.params.id) }))
  } catch (error) {
    return res.status(500).json(errorResonse(error))
  }
}
module.exports = {
  getProvincesController,
  getProvinceController,
  getRegenciesController,
  getRegencyController,
  getDistrictsController,
  getDistrictController,
  getVillagesController,
  getVillageController
}
