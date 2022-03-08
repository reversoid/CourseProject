const Router = require('express')
const controller = require('../../Controllers/authController')
// const {check} = require('express-validator')
const router = new Router()
const Authorization = require('../../middleware/Authorization')

router.post('/registration', controller.registration)
router.post('/login', controller.login)
router.post('/logout', [Authorization], controller.logout)
router.post('/getPosts', controller.getPosts)
router.post('/publish', controller.publish)
router.post('/like', controller.like)
router.post('/comment', controller.comment)
router.post('/getComments', controller.getComments)


module.exports = router