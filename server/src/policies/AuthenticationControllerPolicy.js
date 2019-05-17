const Joi = require('@hapi/joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      firstName: Joi.string().trim(),
      lastName: Joi.string().trim(),
      telephone: Joi.number().integer().min(10),
      email: Joi.string().email().trim(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{6,32}$')
      )
    }

    const { error, value } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'firstName':
          res.status(400).send({
            error: 'First name must be letters only'
          })
          break
        case 'lastName':
          res.status(400).send({
            error: 'First name must be letters only'
          })
          break
        case 'telephone':
          res.status(400).send({
            error: 'Telephone must be numbers only not less than 10'
          })
          break
        case 'email':
          res.status(400).send({
            error: 'Please enter a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
                        <br>
                        1. It must contain ONLY the following characters: lower case, upper case, numerics.
                        <br>
                        2. It must be 6 to 32 characters in length.`
          })
          break
        default:
      }
    } else {
      next()
    }
  }
}
