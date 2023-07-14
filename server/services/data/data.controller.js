const asyncMiddleware = require("../../middleware/asyncMiddleware")
const Data = require("./data.model")

/**
 *  @route api/data;
 *  @method post
 *  @access private
 */

const addData = asyncMiddleware(async (req, res) => {
    const user = req.user

    const { content } = req.body

    const created_data = await Data.create({
        content,
        owner: user._id
    })

    res.status(201).send(created_data)
})

/**
*  @route api/data;
*  @method get
*  @access private
*/

const getData = asyncMiddleware(async (req, res) => {
    const user = req.user
    const data = await Data.find({owner: user._id})

    res.status(200).send(data)
})

/**
*  @route api/data/:id;
*  @method delete
*  @access private
*/

const deleteData = asyncMiddleware(async(req, res) => {
    const user = req.user
    const data = await Data.findById(req.params.id)

    if(data.owner.toString() !== user._id.toString()) {
        res.status(401)
        throw new Error("Unauthorized access, invalid user")
    }

    await Data.findByIdAndRemove(req.params.id)
    res.sendStatus(204).end()
})

/**
*  @route api/data/:id;
*  @method put
*  @access private
*/

const updateData = asyncMiddleware(async(req, res) => {
    const user = req.user
    const id = req.params.id

    const data = await Data.findById(id)

    if(data.owner.toString() !== user._id.toString()) {
        res.status(401)
        throw new Error("Unauthorized access, invalid user")
    }

    const updated_data = await Data.findByIdAndUpdate(id, {content: req.body.content}, {new: true})
    res.status(200).send(updated_data)
})



module.exports = {
    addData,
    getData,
    deleteData,
    updateData
}