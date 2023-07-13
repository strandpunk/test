const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const useRouter = require('./services/users/users.routes')
const db = require('./config/DB')
const errorMiddleware = require('./middleware/errorMiddleware')
// const crypto = require('crypto')

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

// console.log(crypto.randomUUID())

PORT = process.env.PORT || 4000

db()
app.use('/', useRouter)
app.use(errorMiddleware)

app.listen(PORT, () => console.log('SERVER IS RUNNING ON PORT: ' + PORT))