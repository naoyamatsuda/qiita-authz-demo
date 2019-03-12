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
      return status < 500
    }
  }).catch(e => res.send(e.data))

  if (responseToken.status === 201) {
    const responsePut = await axios({
      method: 'PUT',
      url: 'https://qiita.com/api/v2/items/a7ff1be7905d45b530c1/like',
      headers: { Authorization: `Bearer ${responseToken.data.token}` },
      validateStatus(status) {
        return status < 500
      }
    })

    console.log(responsePut)
    if (responsePut.status === 204) {
      return res.status(responseToken.status).send('<h1>まつだの記事をいいねしたお</h1>')
    }
    if (responsePut.data.type === 'already_liked') {
      return res.status(200).send('<h1>どうやらあなたはすでにいいねをしているようでうす</h1>')
    }
  }
  return res.status(responseToken.status).send('<h1>想定していないエラーが発生したみたい</h1>')
}
