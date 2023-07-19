const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const useRouter = require('./services/users/users.routes')
const db = require('./config/DB')
const errorMiddleware = require('./middleware/errorMiddleware')
const DataRouter = require('./services/data/data.routes')
// const crypto = require('crypto')

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors({
    credentials: true,
}))

// console.log(crypto.randomUUID())

PORT = process.env.PORT || 4000

db()
app.use('/api/users/', useRouter)
app.use('/api/data/', DataRouter)
app.use(errorMiddleware)

app.listen(PORT, () => console.log('SERVER IS RUNNING ON PORT: ' + PORT))