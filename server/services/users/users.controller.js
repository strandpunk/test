const asyncMiddleware = require('../../middleware/asyncMiddleware')
const jwt = require('../../utils/jwt')
const passwordManager = require('../../utils/passwordManager')
const hashPassword = require('../../utils/passwordManager')
const User = require('./users.model')

const getUsers = asyncMiddleware(async (_req, res) => {
    const users = await User.find().select('-password')
    res.status(200).send(users)

    // throw new Error('Error Test')    
})

const register = asyncMiddleware(async (req, res) => {
    const { name, email, password } = req.body

    //check inputs fields
    if (!name || !email || !password) throw new Error("Please fill all fields")

    //validate user
    const user_exists = await User.findOne({ email })

    if (user_exists) throw new Error("User already exists")

    //encrypt
    const hashed_password = await passwordManager.hashPassword(password)

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
        updatedAt: new_user.updatedAt,
        token: jwt.generate(new_user._id)
    })
})

const login = asyncMiddleware(async (req, res) => {
    const { email, password } = req.body

    //validate user
    const existing_user = await User.findOne({ email })
    if (!existing_user) throw new Error("Invalid email")

    //compare pwd
    if (await passwordManager.comparePassword(password, existing_user.password)) {
        res.status(200).send({
            _id: existing_user._id,
            name: existing_user.name,
            email: existing_user.email,
            createdAt: existing_user.createdAt,
            updatedAt: existing_user.updatedAt,
            token: jwt.generate(existing_user._id)
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

const getUserInfo = asyncMiddleware(async (req, res) => {
    const user = req.user
    const id = req.params.id

    if (user?._id.toString() !== id) { //опциональная цепочка ?.
        res.status(401)
        throw new Error("Now authorized, invalid user")
    }
    const info = await User.findById(user._id).select('-password')
    res.status(200).send(info)
})

module.exports = {
    getUsers,
    updateUsers,
    deleteUsers,
    login,
    register,
    getUserInfo
}