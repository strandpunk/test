const bcrypt = require('bcrypt')

module.exports = async(pwd) => {
    const salt = await bcrypt.genSalt()
    return await bcrypt.hash(pwd, salt)
}