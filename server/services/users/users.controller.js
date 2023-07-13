const asyncMiddleware = require('../../middleware/asyncMiddleware')
const hashPassword = require('../../utils/hashPassword')
const User = require('./users.model')

const getUsers = asyncMiddleware(async (_req, res) => {
    const users = await User.find().select('-password')
    res.status(200).send(users)

    // throw new Error('Error Test')    
})

const addUsers = asyncMiddleware(async (req, res) => {
    const { name, email, password } = req.body

    //check inputs fields
    if (!name || !email || !password) throw new Error("Please fill all fields")

    //validate user
    const user_exists = await User.findOne({ email })

    if (user_exists) throw new Error("User already exists")

    //encrypt
    const hashed_password = await hashPassword(password)

    const new_user = await User.create({
        name,
        email,
        password: hashed_password
    })

    res.status(201).send({
        _id: new_user._id,
        name: new_user.name,
        email: new_user.email,
        createdAt: new_user.createdAt,
        updatedAt: new_user.updatedAt

    })
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