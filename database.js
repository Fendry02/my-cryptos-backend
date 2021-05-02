const Mongoose = require('mongoose')

Mongoose.connect('mongodb://benoit:tionebbruy@0.0.0.0:27017/cryptos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
const db = Mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function callback() {
  console.log('Connection with database succeeded.')
})

exports.Mongoose = Mongoose
exports.db = db
