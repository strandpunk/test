const express = require('express')
const { updateUsers, deleteUsers, getUsers, login, register } = require('./users.controller')

const useRouter = express.Router()

useRouter.route('/api/users')
    .get(getUsers)

useRouter.route('/api/users/:id')
    .put(updateUsers)
    .delete(deleteUsers)

useRouter.route('/api/users/login')
    .post(login)

useRouter.route('/api/users/register')
    .post(register)

module.exports = useRouter