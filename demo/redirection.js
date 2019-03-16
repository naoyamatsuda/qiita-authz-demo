require('dotenv').config()

module.exports = async (req, res) => {
  console.log(req.query)
  res.send(req.url)
}
