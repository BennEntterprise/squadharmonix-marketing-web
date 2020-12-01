const express = require('express')
const favicon = require('express-favicon')
const dotenv = require('dotenv')
const path = require('path')
const nodemailer = require('nodemailer')
dotenv.config({ path: './config.env' })

// Initialize an Expresss Application
const port = process.env.PORT || 8080
const host = process.env.HOST || 'localhost'
const app = express()

const transport = require('./email')
app.use(favicon(__dirname + '/harmonix-client/build/favicon.ico'))

// the __dirname is the current directory from where the script is running
app.use(express.json())
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'harmonix-client', 'build')))

// Test Route to Verify Server is Running.
app.get('/ping', function (req, res) {
  return res.send('pong')
})

// Routes to handle contact from Submission
app.post('/academy-contact-form-submit', (req, res) => {
  const {
    parentName,
    studentName,
    email,
    subject,
    message,
    wantsNewsletter,
  } = req.body

  var mailOptions = {
    from: `${parentName} Re:${studentName} <${email}>`,
    to: process.env.NODE_MAILER_TARGET_EMAIL,
    subject: subject,
    text: message,
    html: `<h3>${subject}</h3><p>${message}</p> <p>(This lead can be reached at: ${email})</p>`,
  }
  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err)
      res.send({ success: false, message: err })
    }
    console.log(`Message Sent: %s`, info.messageId)
  })
})

app.post('/artist-contact-form-submit', (req, res) => {
  const { name, email, subject, message } = req.body
  var mailOptions = {
    from: `${name} <${email}>`,
    to: process.env.NODE_MAILER_TARGET_EMAIL,
    cc: 'kyle.bennett@betweenfiveandnine.com',
    subject: subject,
    text: message,
    html: `<h3>${subject}</h3><p>${message}</p> <p>(This lead can be reached at: ${email})</p>`,
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
  console.log(`Make sure you build the project!`)
  console.log(`Now Listening on: http://${host}:${port}`)
})

process.on('SIGINT', function () {
  console.log('Sigint')
  process.exit()
})
