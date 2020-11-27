// DEV Configs
var nodemailer = require('nodemailer')
var transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '3cb009ec7d87aa',
    pass: '527c40e8cbc3b1',
  },
  //   debug: true, // show debug output
  logger: true, // log information in console
})

module.exports = transport

// module.exports = transport

// Production Configs
// var nodemailer = require('nodemailer')
// var transport = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'arealuser@gmail.com',
//     pass: 'the actual password',
//   },
//   //   debug: true, // show debug output
//   logger: true, // log information in console
// })

// module.exports = transport
