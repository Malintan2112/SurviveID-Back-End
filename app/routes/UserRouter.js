
const express = require('express')
const { createUser, getAllUsers, login, logout, getUserById, loginFromGoogle, sendMail, updatePassword, printExcell } = require('../controllers/UserControllers.js')
const refreshToken = require('../controllers/RefreshTokenController.js')
const verifyToken = require('../middleware/VerifyToken.js')

const UserRouter = express.Router()

UserRouter.get('/', verifyToken, getAllUsers)
UserRouter.get('/token', refreshToken)
UserRouter.post('/', createUser)
UserRouter.post('/login', login)
UserRouter.post('/loginGoogle', loginFromGoogle)
UserRouter.get('/logout', logout)
UserRouter.get('/:id', getUserById)
UserRouter.get('/send/mail', sendMail)
UserRouter.put('/updatePassword', updatePassword)
UserRouter.get('/report/printExcell', printExcell)

module.exports = UserRouter
