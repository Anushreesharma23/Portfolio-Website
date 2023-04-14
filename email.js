const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service:'hotmail',
    auth:{
        user: 'anushreesharma232003@outlook.com',
        pass: 'Anushree23!'
    }
});

module.exports = transporter;