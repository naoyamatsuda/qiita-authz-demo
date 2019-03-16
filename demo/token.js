const axios = require('axios')

module.exports = async (req, res) => {
  const responseToken = await axios({
    method: 'POST',
    url: 'https://qiita.com/api/v2/access_tokens',
    data: {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code: req.query.code
    },
    validateStatus(status) {
      return status < 500
    }
  }).catch(e => res.send(e.data))
  console.log(responseToken.data)
  res.send('<p>アクセストークンの取得完了</p>')
}
