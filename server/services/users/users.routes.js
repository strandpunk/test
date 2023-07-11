const express = require('express')
const {addUsers, updateUsers, deleteUsers, getUsers} = require('./users.controller')

const useRouter = express.Router()

useRouter.route('/api/users')
.get(getUsers)
.post(addUsers)

useRouter.route('/api/users/:id')
.put(updateUsers)
.delete(deleteUsers)

module.exports = useRouter