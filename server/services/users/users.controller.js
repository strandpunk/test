const asyncMiddleware = require('../../middleware/asyncMiddleware')
const User = require('./users.model')

const getUsers = asyncMiddleware(async (_req, res) => {
    const user = await User.find()
    res.status(200).send(users)

    // throw new Error('Error Test')
})

const addUsers = asyncMiddleware(async (req, res) => {
    if (req.body?.name === '') throw new Error("Name is required")
    const new_user = await User.create(req.body)
    res.status(201).send(new_user)
})

const updateUsers = asyncMiddleware(async (_req, res) => {
    if (_req.body?.name === '') throw new Error("Name is required")
    const updated_user = await User.findOneAndUpdate({ _id: _req.params.id }, _req.body, { new: true })
    res.status(200).send(updated_user)
})

const deleteUsers = asyncMiddleware(async (req, res) => {
    const user_id = req.params.id
    await User.findByIdAndRemove(user_id)
    res.status(204).end()
})

module.exports = {
    getUsers,
    addUsers,
    updateUsers,
    deleteUsers
}