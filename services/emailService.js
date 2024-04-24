const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {

    console.log('Creating email...')

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailOptions = {
        from: process.env.EMAIL,
        to: to,
        subject: subject,
        text: text
    };

    try {
        // let info = await transporter.sendMail(mailOptions);
        setTimeout(() => {
            console.log('Email sent successfully...');
        }, 2000);
    } catch (error) {
        console.error('Error: ' + error.message);
    }
}

module.exports = { sendEmail };