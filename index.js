const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello Jenkin!'))

app.get('/done', (req, res) => res.send('Done!'))

app.get('/success', (req, res) => res.send('Everything Success!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
 
module.exports = app;
