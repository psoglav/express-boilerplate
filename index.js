require('dotenv/config')

const express = require('express')

const cors = require('cors')
const slowDown = require('express-slow-down')
const session = require('express-session')

const app = express()
const port = require('./app.config').port


app.use([
  express.json(),
  cors({ origin: '*' }),
  session({ secret: 'croack!', resave: false, saveUninitialized: true })
])

app.use('/api', slowDown({
  windowMs: 60 * 1000,
  delayAfter: 200,
  delayMs: 500,
}))

app.use('/api/test/', require('./routes/test'))


app.get('/', (req, res) => {
  console.log(req)
  res.send({ success: true })
})


app.listen(port, () => {
  console.log('App: listening on ' + port)
})
