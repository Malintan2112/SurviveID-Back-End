const User = require('./UserModel.js')


const db = require('../config/database.js')



const dbAsync = async () => {

    await db.sync();
}

dbAsync()


module.exports = { User}