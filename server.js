const express = require('express')
const favicon = require('express-favicon')
const path = require('path')
const port = process.env.PORT || 8080
const host = process.env.HOST || 'localhost'
const app = express()

app.use(favicon(__dirname + '/harmonix-client/build/favicon.ico'))

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'harmonix-client', 'build')))

app.get('/ping', function (req, res) {
  return res.send('pong')
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'harmonix-client', 'build', 'index.html'))
})
app.listen(port, () => {
  console.log(`Make sure you build the project!`)
  console.log(`Now Listening on: http://${host}:${port}`)
})

process.on('SIGINT', function () {
  console.log('Sigint')
  process.exit()
})
