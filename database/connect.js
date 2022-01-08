const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: false
}, (err) => {
  console.log('DB', !err ? 'is connected' : 'is not connected')
  if (err) console.log(err)
})