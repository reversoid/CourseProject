const Router = require('express')

const controller = require('../../Controllers/apiController')
// const {check} = require('express-validator')
const router = new Router()

router.get('/getPosts', controller.getPosts)

module.exports = router