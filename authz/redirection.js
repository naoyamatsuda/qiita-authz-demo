require('dotenv').config()
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
      return status === 201
    }
  }).catch(() => res.status(500).end)

  if (responseToken.status === 201) {
    axios({
      method: 'PUT',
      url: 'https://qiita.com/api/v2/items/a7ff1be7905d45b530c1/like',
      headers: { Authorization: `Bearer ${responseToken.data.token}` }
    })
      .then(response => res.status(response.status).send('<h1>まつだの記事をいいねしたお</h1>'))
      .catch(() => res.status(res.status).end())
  }
  return res.status(200).end()
}
