const Joi = require('joi')

const userSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  gender: Joi.string().required(),
  date_of_birth: Joi.date(),
})

module.export = { userSchema }
