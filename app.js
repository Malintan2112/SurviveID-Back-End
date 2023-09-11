
const express = require('express')
const db = require('./app/config/database.js')
const cors = require('cors')
const bodyparser = require('body-parser')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const pdf = require('express-pdf')
const UserRouter = require('./app/routes/UserRouter.js')
const RegionRouter = require('./app/routes/RegionRouter.js')
const CategoryRouter = require('./app/routes/CategoryRouter.js')
const DestinationRouter = require('./app/routes/DestinationRouter.js')

const PORT = process.env.PORT || 5000

dotenv.config()
const app = express()
// body-parser middleware use
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
  extended: true
}))

try {
  const dbAuth = async () => {
    await db.authenticate()
    console.log('Database berhasil di conect')
  }
  dbAuth()
} catch (error) {
  console.log('Conection Error :  ', error)
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(cookieParser())
app.use(express.json())
app.use(pdf)
app.use('/users', UserRouter)
app.use('/region', RegionRouter)
app.use('/category', CategoryRouter)
app.use('/destination', DestinationRouter)

app.listen(PORT, () => console.log(`Server is conected  ${PORT}`))
