require('dotenv').config()
const qs = require('querystring')

module.exports = (req, res) => {
  const param = {
    client_id: process.env.CLIENT_ID,
    scope: 'read_qiita write_qiita'
    // state: '1234'
  }

  const url = `https://qiita.com/api/v2/oauth/authorize?${qs.stringify(param)}`

  return res.send(`<p>${url}</p>`)
}
