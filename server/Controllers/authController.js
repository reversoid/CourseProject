const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const {validationResult} = require('express-validator')
const User = require('../db/Models/User')
const Post = require('../db/Models/Post')
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
    async login(req, res) {
        try {
            const {username, password} = req.body
            const candidate = await User.findOne({where: {username}})
            
            if (!candidate)
                return res.status(400).json({message: 'Incorrect user or password', code: 1})

            
            const validPassword = bcrypt.compareSync(password, candidate.getDataValue('password'))
            if(!validPassword){
                return res.status(400).json({message: 'Incorrect user or password', code: 1})
            }

            // create jwt
            const token = generateAcessToken(candidate.getDataValue('id'), candidate.getDataValue('username'))
            console.log(token)
            return res.json({message: 'Sucessful login', token: token, code: 0})
            
        } catch (e) {
            res.status(400).json({message: 'Login error', code: 1, e})
        }
    }
    async getPosts(req, res) {
        try {
            const posts = await Post.findAll({order: [['created', 'DESC']], limit: 5})
            return res.json({posts, code: 0})
        } catch (e) {
            res.status(400).json({message: 'Error accessing to database', code: 1})
        }
    }
    
}

module.exports = new authController()