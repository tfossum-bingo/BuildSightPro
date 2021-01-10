const nodemailer = require('nodemailer')
const { AWS_SES_USERNAME, AWS_SES_PASSWORD} = process.env

const sendSpecEmail = (emailsAddresses, jobsiteAddress, attachmentUrl) => {
    const transporter = nodemailer.createTransport({
        host: "email-smtp.us-east-1.amazonaws.com",
        port: 587,
        secure: false,
        auth: {
          user: AWS_SES_USERNAME,
          pass: AWS_SES_PASSWORD
        }
      })
      
    const mailOptions = {
        from: 'support@bowlmetrix.com',
        to: emailsAddresses,
        subject: 'Sending Email using Node.js',
        text: `A new design specification has been added to jobsite: ${jobsiteAddress}. It can be viewed here: ${attachmentUrl}`
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response)
        }
    })
}

module.exports = {
    sendSpecEmail
}