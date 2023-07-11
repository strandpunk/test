const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const useRouter = require('./services/users/users.routes')
const db = require('./config/DB')

const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

PORT = process.env.PORT || 4000

db()
app.use('/', useRouter)

app.listen(PORT, () => console.log('SERVER IS RUNNING ON PORT: ' + PORT))