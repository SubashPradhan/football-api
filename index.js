const express = require('express')
const app = express()

const port = 4000

app.get('/', (require, response) => response.send('Welcome'))

app.listen(port, () => console.log(`Listening to ${port}`))