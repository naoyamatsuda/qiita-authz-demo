const express = require('express')

const authz = require('./authz/authz')
const redirection = require('./authz/redirection')

// Constants
const PORT = 3000

// App
const app = express()
app.get('/authz', authz)
app.get('/authz/redirection', redirection)

const port = process.env.PORT || PORT
app.listen(port)
console.log(`Listen Port${port}`)
