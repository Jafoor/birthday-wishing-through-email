const cron = require('node-cron');
const { getCustomers } = require('../datas/customers');
const { sendEmail } = require('../services/emailService');

// write some scheduler time format
// * * * * * => run every minute
// 0 * * * * => run every hour
// 30 13 * * * => run every 1:30 PM
// 0 0 * * * => run every midnight
// 0 0 1 * * => run every first day of the month
// 0 0 1 1 * => run every first day of the year

const scheduledTime = '25 15 * * *';

let scheduleBirthday = (eventEmitter) => {
    eventEmitter.on('serverStarted', () => {
        console.log("Birthday scheduler started...")
        cron.schedule(scheduledTime, () => {
            console.log('Running cron job at', new Date().toLocaleString());
            let today = new Date();
            let customers = getCustomers();
            for (let customer of customers) {
                let birthday = customer.birthday;
                console.log(birthday.getDate(), today.getDate(), birthday.getMonth(), today.getMonth());
                if (birthday.getDate() == today.getDate() && birthday.getMonth() == today.getMonth()) {
                    let message = `Dear ${customer.name}, Happy Birthday!`;
                    sendEmail(customer.email, 'Happy Birthday!', message);
                    console.log(`Email sent successfully to ${customer.email}`);
                }
            }
        });
    });
}

module.exports = { scheduleBirthday };