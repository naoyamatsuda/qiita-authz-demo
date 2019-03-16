const express = require('express')

const authz = require('./authz/authz')
const redirection = require('./authz/redirection')

const demoAuthz = require('./demo/authz')
const demoRedirect = require('./demo/redirection')
const demoToken = require('./demo/token')
const demoMyInfo = require('./demo/myInfo')

// Constants
const PORT = 3000

// App
const app = express()
app.get('/authz', authz)
app.get('/authz/redirection', redirection)

app.get('/demo/authz', demoAuthz)
app.get('/demo/redirection', demoRedirect)
app.get('/demo/token', demoToken)
app.get('/demo/user_info', demoMyInfo)

const port = process.env.PORT || PORT
app.listen(port)
console.log(`Listen Port${port}`)
