const express = require('express')
const authMiddleware = require('../../middleware/authMiddleware')
const { getData, updateData, deleteData, addData } = require('./data.controller')

const DataRouter = express.Router()

DataRouter
    .route("/")
    .all(authMiddleware)
    .get(getData)
    .post(addData)

DataRouter
    .route("/:id")
    .all(authMiddleware)
    .put(updateData)
    .delete(deleteData)

module.exports = DataRouter