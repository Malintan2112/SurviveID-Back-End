const jwt = require('jsonwebtoken')
const { errorResponse } = require('../controllers/JsonDefault.js')

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]
  // if(token == null) return res.sendStatus(401);
  if (token == null) res.json(errorResponse('unauthorization'))

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.json(errorResponse('token expired'))
    req.email = decoded.email
    next()
  })
}

module.exports = verifyToken
