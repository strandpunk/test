const User = require('./users.model')

const getUsers = async (_req, res) => {
    try {
        const users = await User.find()
        res.status(200).send(users)
    }
    catch (error) {
        console.status(500).send(error.message)
    }

}

const addUsers = async (req, res) => {
    try {
        if (req.body?.name === '') {
            res.status(404).send("Name is equired")
            return
        }
        const new_user = await User.create(req.body)
        res.status(201).send(new_user)
    }
    catch (error) {
        console.status(500).send(error.message)
    }
}

const updateUsers = async (req, res) => {
    try {
        if (req.body?.name === '') {
            res.status(404).send("Name is equired")
            return
        }
        console.log(req.params.id)
        const updated_user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        res.status(200).send(updated_user)
    }
    catch (error) {
        console.status(500).send(error.message)
    }
}

const deleteUsers = async (req, res) => {
    try {
        const user_id = req.params.id
        await User.findByIdAndRemove(user_id)
        res.status(204).end()
    }
    catch (error) {
        console.status(500).send(error.message)
    }
}

module.exports = {
    getUsers,
    addUsers,
    updateUsers,
    deleteUsers
}