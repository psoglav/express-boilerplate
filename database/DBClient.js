require('./connect')

const User = require('./models/User')

module.exports = {
  async createUser(data) {
    return await new User(data).save(null)
  }
}