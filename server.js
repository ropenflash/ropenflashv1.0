const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({ path: './.env' })
const app = express()

app.get('/api', (req, res) => {
    res.json({ data: 'important data' })
})

app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})
