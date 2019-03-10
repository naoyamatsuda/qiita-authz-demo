const express = require('express')

const authz = require('./authz/authz')

// Constants
const PORT = 3000

// App
const app = express()
app.get('/authz', authz)

// app.get('/', (req, res) => {
//   res.send('Hello Node.js Sample!\n')
// })

const port = process.env.PORT || PORT
app.listen(port)
console.log(`Listen Port${port}`)
