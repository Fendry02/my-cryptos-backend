const Boom = require('@hapi/boom')

module.exports = {
  method: 'POST',
  path: '/users',
  config: {
    handler: async (req, h) => {
      const payload = req.payload
    },
    // validate: {
    //   payload: createUserSchema,
    //   failAction: (req, h, err) => {
    //     console.error(err)
    //     return err
    //   },
    // },
  },
}
