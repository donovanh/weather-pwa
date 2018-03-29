const path = require('path')
const express = require('express')
const appShellHandler = require('./app-shell-handler')
const appManifest = require('../app/manifest.json')
const request = require('request')

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
app.get('/api/', (req, res) => {
  const { appid, q } = req.query || {}
  if (!appid) return
  const url = `http://api.openweathermap.org/data/2.5/forecast?appid=${appid}&q=${q}`
  request(url, (error, response, body) => {
    if (error) {
      res.send({})
    }
    res.send(body)
  })
})

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
