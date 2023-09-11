const { isEmpty } = require('lodash')

const succesResponse = (data) => {
  return {
    data: data,
    error: false,
    length: data.length || 0,
    status: 200
  }
}

const errorResonse = (message) => {
  return {
    data: null,
    error: true,
    status: 404,
    message: isEmpty(message) ? 'Terjadi kesalahan server' : message
  }
}

module.exports = { succesResponse, errorResonse }
