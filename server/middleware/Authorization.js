const jwt = require('jsonwebtoken')
const {secret} = require('../config.json')

const Authorization = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.sendStatus(403);
    }
    try {
        const data = jwt.verify(token, secret);
        req.userId = data.id;
        req.username = data.username;
        return next();
    } catch {
        return res.sendStatus(403);
    }
};
module.exports = Authorization