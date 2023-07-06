const express = require('express')
const router = express.Router()

router.post('/data', (req, res) => {
    const {email, password} = req.body

    console.log(email + ' | ' + password)
})

router.get('/welcome', (req, res) => {
    const userData = 'ура, сервер работает!!1'

    res.send(userData)
})

module.exports = router