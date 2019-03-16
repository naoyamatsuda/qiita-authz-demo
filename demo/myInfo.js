const axios = require('axios')

module.exports = async (req, res) => {
  axios({
    method: 'GET',
    url: 'https://qiita.com/api/v2/authenticated_user',
    headers: { Authorization: 'Bearer cbd93bfa9be9c9834b953b902c46601939d109d7' }
  })
    .then(apiResponse => res.json(apiResponse.data))
    .catch(err => console.log(err))
}
