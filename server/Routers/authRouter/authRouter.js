const Router = require('express')
const controller = require('../../Controllers/authController')
// const {check} = require('express-validator')
const router = new Router()
const Authorization = require('../../middleware/Authorization')

router.post('/registration', controller.registration)
router.post('/login', controller.login)
router.post('/logout', [Authorization], controller.logout)
router.post('/protected', [Authorization], controller.protected)
router.post('/getProfile', [Authorization], controller.getProfile)
// router.post('/getPosts', controller.getPosts)
router.get('/getPosts', controller.getPosts)

router.post('/publish', [Authorization], controller.publish)
router.post('/like', [Authorization], controller.like)
router.post('/comment', [Authorization], controller.comment)
router.post('/getComments', controller.getComments)
router.post('/getTags', controller.getTags)



module.exports = router