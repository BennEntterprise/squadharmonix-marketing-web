const express = require('express')
const favicon = require('express-favicon')
const path = require('path')
const port = process.env.PORT || 8080
const host = process.env.HOST || 'localhost'
const app = express()
const nodemailer = require('nodemailer')

const transport = require('./email')
app.use(favicon(__dirname + '/harmonix-client/build/favicon.ico'))

// the __dirname is the current directory from where the script is running
app.use(express.json())
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'harmonix-client', 'build')))

app.get('/ping', function (req, res) {
  return res.send('pong')
})

app.post('/artist-contact-form-submit', (req, res) => {
  const { name, email, subject, message } = req.body
  var mailOptions = {
    from: `${name} <${email}>`,
    to: 'sample@gmail.com',
    subject: subject,
    text: message,
    html: `<h3>${subject}</h3><p>${message}</p>`,
  }
  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err)
      res.send({ success: false, message: err })
    }
    console.log(`Message Sent: %s`, info.messageId)
  })
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'harmonix-client', 'build', 'index.html'))
})
app.listen(port, () => {
  transport.verify(function (error, success) {
    if (error) {
      console.log(error)
    } else {
      console.log('Server is ready to take our messages')
    }
  })
  console.log(`Make sure you build the project!`)
  console.log(`Now Listening on: http://${host}:${port}`)
})

process.on('SIGINT', function () {
  console.log('Sigint')
  process.exit()
})
