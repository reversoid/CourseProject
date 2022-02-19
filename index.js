const express = require('express')
const path = require ('path')
const corsMiddleware = require('./server/middleware/corsMiddleware')
const authRouter = require('./server/Routers/authRouter/authRouter')

// make config
const PORT = process.env.PORT || 8000

// create app
const app = express()

// app use
app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, 'build')))

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "build", "index.html"))
})

app.use(corsMiddleware)
app.use(express.json())
app.use('/api/auth', authRouter)

const start = async () => {
    try{
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    } catch(e){
        console.log(e)
    }
}

start()
