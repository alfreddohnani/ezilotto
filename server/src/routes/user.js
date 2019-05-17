const AuthenticationController = require('../controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')




// app.post('/login', AuthenticationController.login);

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login', AuthenticationController.login)
}
