const router = require('express').Router()

router.all('/', (req, res) => {
  res.send({ success: true })
})

module.exports = router