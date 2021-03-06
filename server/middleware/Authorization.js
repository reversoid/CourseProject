const jwt = require('jsonwebtoken')
const {secret} = require('../config.js')

const Authorization = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(403).json({message: 'No access cookie'});
    }
    try {
        const data = jwt.verify(token, secret);
        req.userId = data.id;
        req.username = data.username;
        return next();
    } catch {
        return res.status(403).json({message: 'Error jwt verification'});
    }
};
module.exports = Authorization