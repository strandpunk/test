const jwt = require('jsonwebtoken')
const express = require('express')
const authMiddleware = require('../../middleware/authMiddleware')
const { getUsers, updateUsers, deleteUsers, getUserInfo, login, register } = require('./users.controller')

const useRouter = express.Router()

useRouter.get('/', getUsers)
useRouter.post('/register', register)
useRouter.post('/login', login)

useRouter.get("/loggedIn", (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.json(false);

        jwt.verify(token, process.env.JWT_SECRET);
        res.send(true)
    } catch (error) {
        res.json(false);
    }
})

useRouter.route('/:id')
    .put(updateUsers)
    .delete(deleteUsers)
    .get(authMiddleware, getUserInfo)

module.exports = useRouter