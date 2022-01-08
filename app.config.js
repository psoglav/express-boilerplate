module.exports = {
  port: process.env.MODE == 'DEV' ? process.env.PORT || 8080 : 80
}