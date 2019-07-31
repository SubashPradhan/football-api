const express = require('express')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()  

const app = express()
const teamRouter =require('./team/router')
// const db = require('./db')
// const model = require('./team/model')
const port = 4000
app.use(jsonParser)
app.use(teamRouter)
app.get('/', (require, response) => response.send('Welcome'))

app.listen(port, () => console.log(`Listening to ${port}`))
