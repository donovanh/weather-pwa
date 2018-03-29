const path = require('path')
const express = require('express')
const appShellHandler = require('./app-shell-handler')
const appManifest = require('../app/manifest.json')

const app = express()

app.use((req, res, next) => {
  console.log(`req.url: ${req.url}`)
  next()
})
app.use(express.static(path.join(__dirname, '../../build/public'), {
  maxAge: '1d'
}))
// host sw.js
app.use(express.static(path.join(__dirname, '../../build/public/js')))
app.get('/manifest.json', (request, response) => response.json(appManifest))

app.get('/', appShellHandler)

function init () {
  let server
  return Promise.resolve(app)
    .then(app => {
      server = app.listen(3000, (err) => {
        if (err) throw err
      })
    })
    .then(() => ({ app, server }))
}

module.exports = {
  init
}
