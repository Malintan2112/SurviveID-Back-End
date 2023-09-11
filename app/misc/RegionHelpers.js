const getProvinces = () => {
  try {
    return require('api-wilayah-indonesia/static/api/provinces.json')
  } catch (error) {
    return null
  }
}

const getProvince = (id) => {
  try {
    return require(`api-wilayah-indonesia/static/api/province/${id}.json`)
  } catch (error) {
    return null
  }
}

const getRegency = (id) => {
  try {
    return require(`api-wilayah-indonesia/static/api/regency/${id}.json`)
  } catch (error) {
    return null
  }
}

const getRegencies = (id) => {
  try {
    return require(`api-wilayah-indonesia/static/api/regencies/${id}.json`)
  } catch (error) {
    return null
  }
}

const getDistricts = (id) => {
  try {
    return require(`api-wilayah-indonesia/static/api/districts/${id}.json`)
  } catch (error) {
    return null
  }
}

const getDistrict = (id) => {
  try {
    return require(`api-wilayah-indonesia/static/api/district/${id}.json`)
  } catch (error) {
    return null
  }
}

const getVillages = (id) => {
  try {
    return require(`api-wilayah-indonesia/static/api/villages/${id}.json`)
  } catch (error) {
    return null
  }
}

const getVillage = (id) => {
  try {
    return require(`api-wilayah-indonesia/static/api/village${id}.json`)
  } catch (error) {
    return null
  }
}

module.exports = { getProvinces, getProvince, getRegencies, getRegency, getDistricts, getDistrict, getVillages, getVillage }
