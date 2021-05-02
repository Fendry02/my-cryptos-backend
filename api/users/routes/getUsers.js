const Boom = require('@hapi/boom')

const User = require('../models/user').User

module.exports = {
  method: 'GET',
  path: '/users',
  config: {
    handler: async (req, res) => {
      try {
        const user = await User.find({})

        return user
      } catch (err) {
        return Boom.badImplementation(err)
      }
    },
  },
}
