const express = require('express')
const authMiddleware = require('../../middleware/authMiddleware')
const { getUsers, updateUsers, deleteUsers, getUserInfo, login, register } = require('./users.controller')

const useRouter = express.Router()

useRouter.get('/', getUsers)
useRouter.post('/register', register)
useRouter.post('/login', login)

useRouter.route('/:id')
    .put(updateUsers)
    .delete(deleteUsers)
    .get(authMiddleware, getUserInfo)

module.exports = useRouter