// DEV Configs
var nodemailer = require('nodemailer')

console.log(`Your mode is : ${process.env.NODE_ENV}`)

// ********************
// SET THE TRANSPORT OBJECT FOR DEVELOPMENT/STAGING
// ********************
let transportOptions
if (process.env.NODE_ENV !== 'production') {
  transportOptions = {
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: process.env.NODE_MAILER_USER,
      pass: process.env.NODE_MAILER_PASSWORD,
    },
    debug: true, // show debug output
    logger: true, // log information in console
  }
}
// ********************
// SET THE PRODCUTION TRANSPORT OBJECT
// ********************
else {
  transportOptions = {
    // service: 'gmail',
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: process.env.NODE_MAILER_USER,
      pass: process.env.NODE_MAILER_PASSWORD,
    },
  }
}

// ********************
// CREAT AND VERIFY TRANSPORT OBJECT
// ********************
var transport = nodemailer.createTransport(transportOptions)
transport.verify(function (error, success) {
  if (error) {
    console.log(error)
  } else {
    console.log('Server is ready to take our messages')
  }
})

module.exports = transport
