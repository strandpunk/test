const jwt = require('jsonwebtoken')

module.exports = { 
    generate: (_id) => jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: '30d'}),
    verify: (token) => jwc.verify(token, process.env.JWT_SECRET)
}