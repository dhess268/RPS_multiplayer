const express = require('express')
const app = new express()
const PORT = 8000
const cors = require('cors')
const path = require('path')

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})