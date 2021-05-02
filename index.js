'use strict'
const Hapi = require('@hapi/hapi')
const glob = require('glob')
const path = require('path')
require('./database')

const init = async () => {
  const server = Hapi.server({
    host: '0.0.0.0',
    port: 16080,
  })

  server.validator(require('joi'))

  glob
    .sync('api/**/routes/*.js', {
      root: __dirname,
    })
    .forEach((file) => {
      const route = require(path.join(__dirname, file))
      server.route(route)
    })

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
