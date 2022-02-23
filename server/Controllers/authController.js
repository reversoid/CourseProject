const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const {validationResult} = require('express-validator')
const User = require('../db/Models/User')
const {secret} = require('../config.json')

const generateAcessToken = (id, username) => {
    const payload = {
        id,
        username
    }
    
    return jwt.sign(payload, secret, {expiresIn: '48h'})
}

class authController{
    async registration(req, res) {
        try {
            console.log('here')
            const {username, password} = req.body
            const candidate = await User.findOne({where: {username}})

            if (candidate)
                return res.status(400).json({message: 'User already exists', code: 1})


            const hashedPassword = bcrypt.hashSync(password, 7)

            
            const user= new User({
                username,
                password: hashedPassword
            })

            await user.save()
           
            const token = generateAcessToken(user._id, user.username)
            return res.json({message: 'User has been succesfully created', code: 0, token})
        } catch (e) {
            res.status(400).json({message: 'Registration error', code: 1, e})
        }
    }
    
}

module.exports = new authController()