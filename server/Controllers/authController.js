const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const {validationResult} = require('express-validator')
const User = require('../db/Models/User')
const Post = require('../db/Models/Post')
const Post_like = require('../db/Models/Like')
const Comment = require('../db/Models/Comment')
const Tag = require('../db/Models/Tag')

const sequelize = require('sequelize')

const {
    secret
} = require('../config')
const cookieParser = require('cookie-parser')

const generateAcessToken = (id, username) => {
    const payload = {
        id,
        username
    }
    return jwt.sign(payload, secret, {
        expiresIn: '48h'
    })
}

class authController {
    async registration(req, res) {
        try {
            const {
                username,
                password
            } = req.body
            const candidate = await User.findOne({
                where: {
                    username
                }
            })

            if (candidate)
                return res.status(400).json({
                    message: 'User already exists',
                    code: 1
                })


            const hashedPassword = bcrypt.hashSync(password, 7)


            const user = new User({
                username,
                password: hashedPassword
            })

            await user.save()

            const token = generateAcessToken(user._id, user.username)
            return res.json({
                message: 'User has been succesfully created',
                code: 0,
                token
            })
        } catch (e) {
            res.status(400).json({
                message: 'Registration error',
                code: 1,
                e
            })
        }
    }
    async login(req, res) {
        try {
            const {
                username,
                password
            } = req.body
            const candidate = await User.findOne({
                where: {
                    username
                }
            })

            if (!candidate)
                return res.status(400).json({
                    message: 'Incorrect user or password',
                    code: 1
                })


            const validPassword = bcrypt.compareSync(password, candidate.getDataValue('password'))
            if (!validPassword) {
                return res.status(400).json({
                    message: 'Incorrect user or password',
                    code: 1
                })
            }

            // create jwt
            const token = generateAcessToken(candidate.getDataValue('id'), candidate.getDataValue('username'))
            // console.log(token)

            return res.cookie("access_token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 1000 * 60 * 60 * 48,
                sameSite: 'Strict'
            }).json({
                message: 'Sucessful login',
                code: 0
            })

        } catch (e) {
            res.status(400).json({
                message: 'Login error',
                code: 1,
                e
            })
        }
    }
    async logout(req, res) {
        return res
            .clearCookie('access_token')
            .status(200)
            .json({
                message: 'Succesfully logged out'
            })
    }
    async protected(req, res) {
        return res.json({
            user: {
                id: req.userId,
                username: req.username
            }
        });
    }
    async getProfile(req, res) {
        try {
            const {
                username
            } = req.body

            const [profileInfo, metadata_user] = await User.sequelize.query(`
            SELECT id, user_likes_count FROM users WHERE username = '${username}' LIMIT 1
            `)
            // const profileInfo = await User.findOne({where: {username}})
            if (!profileInfo) {
                return res.status(400).json({
                    message: 'Fatal error: user was not found!'
                })
            }

            return res.json({
                profileInfo,
            })

        } catch (error) {
            return res.status(500).json({error})
        }

        // Promise.all([getProfileInfo(result), getProfilePosts(result)]).then(()=>{return res.json({result})})
    }
    async getUsernameById(req, res) {
        try {
            // const {id} = req.body
            // const username = await User.findOne({where:{
            //     id
            // }})
            return res.json({
                id
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Error finding user'
            })
        }
    }
    async getPosts(req, res) {
        try {
            let {
                filmsChecked,
                gamesChecked,
                booksChecked,
                musicChecked,
                fromDate,
                toDate,
                tags,
                username

            } = req.query
            

            filmsChecked = filmsChecked == 'true'
            gamesChecked = gamesChecked == 'true'
            booksChecked = booksChecked == 'true'
            musicChecked = musicChecked == 'true'


            // first of all determine whether there are tags
            let allowedPosts
            let tagsQuery
            if (tags) {
                let [allowedPosts, metadata] = await Tag.sequelize.query(`select post_id_fk from tags where text in (${tags.map((el)=>{return `'${el}'`}).toString()})`)
                if (!allowedPosts.length) {
                    return res.json({
                        posts: [],
                        code: 0
                    })
                }
                tagsQuery = `post_id_fk in (${allowedPosts.map((el)=>{return `'${String(el)}'`}).toString()})`
            } else {
                tagsQuery = ''
            }
            // make DATE string
            let dateQuery
            if (!fromDate && !toDate) {
                dateQuery = ''
            } else if (!fromDate) {
                dateQuery = `created <= '${toDate} 23:59:59'`
            } else if (!toDate) {
                dateQuery = `created >= '${fromDate} 00:00:00'`
            } else {
                //both exist
                dateQuery = `created >= '${toDate} 00:00:00' AND created <= '${toDate} 23:59:59'`
            }


            // make category string
            let categoryQuery
            if (!filmsChecked && !gamesChecked && !booksChecked && !musicChecked) {
                categoryQuery = ''
            } else {
                //exist at least 1 category

                let categoryArr = [
                    filmsChecked ? `'films' ` : '',
                    gamesChecked ? `'games' ` : '',
                    booksChecked ? `'books' ` : '',
                    musicChecked ? `'music' ` : ''
                ].filter((el) => {
                    if (el) {
                        return el
                    }
                }).toString()

                categoryQuery = ((fromDate || toDate) ? 'AND ' : '') + `category in (${categoryArr})`
            }


            //query for specific user
            let usernameQuery = username?`username = '${username}'`: ''
            // const {
            //     id
            // } = req.body || 0

            // limit: 5
            // const posts = await Post.findAll({
            //     order: [
            //         ['created', 'DESC']
            //     ]

            // })
            //used to be
            const [posts, metadata] = await Post.sequelize.query(`
                select post_id,
                    title,
                    text,
                    like_count,
                    uid_fk,
                    rating,
                    created,
                    username,
                    category
                from posts
                        join users u on u.id = posts.uid_fk
                ${(dateQuery||categoryQuery||tagsQuery|| usernameQuery)?'where':''} ${dateQuery} ${categoryQuery} ${tagsQuery} ${usernameQuery}
                order by created DESC
            `)




            let debug = `
            select post_id,
                title,
                text,
                like_count,
                uid_fk,
                rating,
                created,
                username
            from posts
                    join users u on u.id = posts.uid_fk
            ${(dateQuery||categoryQuery)?'where':''} ${dateQuery} ${categoryQuery}
            order by created DESC
        `
            return res.json({
                posts,
                req: req.query,
                code: 0
            })
        } catch (e) {
            res.status(400).json({
                message: 'Error accessing to database',
                code: 1,
                e
            })
        }
    }
    async getTags(req, res) {
        try {
            const {
                post_id
            } = req.body
            const tags = await Tag.findAll({
                where: {
                    post_id_fk: post_id
                }
            })
            return res.json({
                tags
            })
        } catch (e) {
            return res.status(400).json({
                message: 'Error getting tags',
                e
            })
        }
    }
    async publish(req, res) {
        try {

            const {
                title,
                text,
                rating,
                tags,
                category
            } = req.body
            const userId = req.userId


            let date = new Date()

            const post = await Post.create({
                title,
                text,
                created: date.toISOString().slice(0, 19).replace('T', ' '),
                like_count: 0,
                uid_fk: userId,
                rating,
                category
            })

            await tags.map((tag) => {
                Tag.create({
                    post_id_fk: post.post_id,
                    text: tag
                })
            })

            return res.json({
                message: 'Post has been published',
                code: 0
            })
        } catch (error) {
            res.status(400).json({
                message: 'Post publishing error',
                code: 1,
                error
            })
        }
    }
    async like(req, res) {
        try {
            const {
                post_id
            } = req.body

            let date = new Date()
            date = date.toISOString().slice(0, 19).replace('T', ' ')

            // console.log('what', await Post_like.findAll({where: {uid_fk: 1, post_id_fk: Number(post_id)}}))
            const like_candidate = await Post_like.findOne({
                where: {
                    uid_fk: 1,
                    post_id_fk: post_id
                }
            })
            if (like_candidate) {
                //decrease amount of likes
                const postToDecreaseLike = await Post.findOne({
                    where: {
                        post_id: post_id
                    }
                })
                // console.log(postToDecreaseLike.getDataValue('like_count'));
                postToDecreaseLike.setDataValue('like_count', Number(postToDecreaseLike.getDataValue('like_count')) - 1)
                postToDecreaseLike.save()

                like_candidate.destroy()
                return res.json({
                    message: 'Unliked sucessfully',
                    code: 0,
                    status: 'unliked'
                })
            } else {
                const postToIncreaseLike = await Post.findOne({
                    where: {
                        post_id: post_id
                    }
                })
                // console.log(postToDecreaseLike.getDataValue('like_count'));
                postToIncreaseLike.setDataValue('like_count', Number(postToIncreaseLike.getDataValue('like_count')) + 1)
                postToIncreaseLike.save()
                // TODO REMOVE HARDCODE!!! (UID_FK)
                const like = Post_like.create({
                    post_id_fk: post_id,
                    uid_fk: 1,
                    created: date
                })

                return res.json({
                    message: 'Liked sucessfully',
                    code: 0,
                    status: 'liked'
                })
            }

        } catch (e) {
            return res.status(400).json({
                message: 'Liked failed',
                code: 1,
                e
            })
        }
    }
    async comment(req, res) {
        try {
            const {
                post_id,
                text,
                from_id
            } = req.body

            let date = new Date()
            date = date.toISOString().slice(0, 19).replace('T', ' ')

            // TODO REMOVE HARDCODE!!! (UID_FK)
            const comment = Comment.create({
                post_id_fk: post_id,
                uid_fk: from_id,
                created: date,
                text: text
            })
            return res.json({
                message: 'Commented sucessfully',
                code: 0
            })
        } catch (e) {
            return res.status(400).json({
                message: 'Comment failed',
                code: 1,
                e
            })
        }
    }
    async getComments(req, res) {
        try {
            const {
                post_id
            } = req.body

            // const comments = await Comment.findAll({ where:{post_id_fk: post_id}, order: [['created', 'DESC']] })
            // const comments = await sequelize.query()
            const [comments, metadata] = await Comment.sequelize.query(`
            select comment_id, post_id_fk, uid_fk, created, text, username
            from comments
                     join users u on u.id = comments.uid_fk
            where post_id_fk = ${post_id}`)

            // console.log(comments);

            // add column to result that shows username using mysql
            return res.json({
                message: 'Succesfully loaded comments',
                code: 0,
                comments
            })
        } catch (e) {
            // return res.status(400).json({
            //     message: 'Comments loading failed',
            //     code: 1,
            //     e
            // })
        }
    }
}

module.exports = new authController()