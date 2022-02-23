const Router = require('express')
const controller = require('../../Controllers/authController')
// const {check} = require('express-validator')
const router = new Router()

router.post('/registration', controller.registration)


module.exports = router