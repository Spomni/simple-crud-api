const { setErrorHandler, createRouter } = require('../lib/router')

setErrorHandler(handleError)

function createApp() {

  const app = createRouter()
  
  app.register({
    path: '/person',
    use: personController,
  })

  return app;
}

module.exports = {
  createApp,
}
