const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const {validationResult} = require('express-validator')
const Post = require('../db/Models/Post')
const {secret} = require('../config.json')

const generateAcessToken = (id, username) => {
    const payload = {
        id,
        username
    }
    return jwt.sign(payload, secret, {expiresIn: '48h'})
}

class apiController{
    async getPosts(req, res) {
        try {
            const posts = await Post.findAll({order: [['created', 'DESC']], limit: 5})
           
            return res.json({posts, code: 0})
        } catch (e) {
            res.status(400).json({message: 'Error accessing to database', code: 1})
        }
    }
}

module.exports = new apiController()