const express = require('express')
const path = require ('path')
const corsMiddleware = require('./server/middleware/corsMiddleware')
const authRouter = require('./server/Routers/authRouter/authRouter')
// const apiRouter = require('./server/Routers/apiRouter/apiRouter')
const {mySqlUri} = require('./server/config.js')
const cors = require('cors')
const cookieParser = require("cookie-parser");
// database
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(mySqlUri)


const PORT = process.env.PORT || 8000

// create app
const app = express()

// app use

app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, 'build')))


const {myUrl} = require('./server/config.js')
app.use(cors({credentials:true, origin: [myUrl, new RegExp(`\\^${myUrl}`)]}))
app.use(cookieParser());
// app.use(corsMiddleware)
app.use(express.json())
app.use('/api/auth', authRouter)

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "build", "index.html"))
})

const start = async () => {
    try{
        await sequelize.authenticate();
        console.log("good connect")
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    } catch(e){
        console.log('unable to connetty')
        console.log(e)
    }
}

start()
