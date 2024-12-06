require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require('express')

const usersRoute = require('./routes/users')

const middlewareLogRequest = require('./middleware/logs')
const upload = require('./middleware/multer')

const app = express(middlewareLogRequest)


app.use(middlewareLogRequest)
app.use(express.json())
app.use('/assets', express.static('public'))

app.use('/users', usersRoute)
app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'Upload Berhasil'
    })
})

// error handling
app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server berhasil di running di port ${PORT}`)
})
