const asyncMiddleware = require('../../middleware/asyncMiddleware')
const passwordManager = require('../../utils/passwordManager')
const hashPassword = require('../../utils/passwordManager')
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
    const existing_user = await User.findOne({ email })

    if (!existing_user) throw new Error("Invalid email")


    if (await passwordManager.comparePassword(password, existing_user.password)) {
        res.status(201).send({
            _id: existing_user._id,
            name: existing_user.name,
            email: existing_user.email,
            createdAt: existing_user.createdAt,
            updatedAt: existing_user.updatedAt
        })
    } else throw new Error("Invalid password")
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