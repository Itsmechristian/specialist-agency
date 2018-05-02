const express = require('express')
    , app = express()
    , path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(4000, () => console.log('Connected to server'))
