const express = require('express')
const app = express()
const moviesRouter = require('./routes/movies')

require('dotenv').config()

app.use(express.urlencoded({ extended : true }))
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs')

app.use('/movies', moviesRouter)
app.get('/', (req,  res) => {
    res.send('Nothing Yet')
})

const port = process.env.PORT || 8000
app.listen(port , (req, res) => {
    console.log('listening on port ' + port)
})