const User = require('./users.model')

const getUsers = async (_req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    }
    catch (error) {
        console.error(error)
    }

}

const addUsers = async (req, res) => {
    try {
        const new_user = await User.create(req.body)
        res.send(new_user)
    }
    catch (error) {
        console.error(error)
    }
}

const updateUsers = async (req, res) => {
    try {
        console.log(req.params.id)
        const updated_user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        res.send(updated_user)
    }
    catch (error) {
        console.error(error)
    }
}

const deleteUsers = async (req, res) => {
    try {
        const user_id = req.params.id
        await User.findByIdAndRemove(user_id)
        res.send('user ' + user_id + 'was deleted')
    }
    catch (error) {
        console.error(error)
    }
}

module.exports = {
    getUsers,
    addUsers,
    updateUsers,
    deleteUsers
}