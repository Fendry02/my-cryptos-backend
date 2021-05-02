const Mongoose = require('mongoose')
Schema = Mongoose.Schema

const UserSchema = new Schema({
  id: { type: String, unique: true, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  gender: { type: String, required: true },
  date_of_birth: { type: Date, required: true },
})
const user = Mongoose.model('users', UserSchema)

module.exports = {
  User: user,
}
