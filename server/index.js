const { randomBytes } = require('crypto')
const express = require('express')

const app = express()
app.use(express.json())

PORT = 4000

let users = [
    {
        id: "1",
        name: 'Anna'
    }
]

app.get('/users', (_req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    const new_user_id = randomBytes(4).toString('hex')
    const new_user = {
        id: new_user_id,
        name: req.body.name
    }
    users.push(new_user)
    res.send(new_user)
})

app.put('/users/:id', (req, res) => {
    const user_id = req.params.id
    const user = users.find(u => u.id === user_id)
    user.name = req.body.name
    res.send(user)
})

app.delete('/users/:id', (req, res) => {
    const user_id = req.params.id
    users = users.filter(u => user_id !== u.id)
    res.send('user ' + user_id + ' was deleted')
})

app.listen(PORT, () => console.log('SERVER IS RUNNING ON PORT: ' + PORT))