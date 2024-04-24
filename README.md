# Automatic Birthday Wishing

This is a simple `Node.js` project using `Express.js` framework that sends birthday wishes on their birthday. It uses `node-cron` to schedule the task of sending birthday wishes.

## System Dependencies

- Node JS 18
- Express JS
- node-cron
- nodemailer

## Pre-requisite
- [Install NodeJS v18.10.0](https://nodejs.org/download/release/v18.10.0/)

## Installation
1. Clone the project

   ```
   git clone https://bitbucket.org/tigerit/communicator-desktop-pwa.git
   ```
   
2. Inside the project root folder, run the following command to install dependencies:

   ```
    npm i
    ```
   
3. Run the project

   ```
   npm run start
   ```
   
## API Endpoints
- `/health` - method: `GET` Check the health of the API 
- `/customer/health` - method: `POST` Add a new customer

   body: 
   ```
   {
    "name": "Abu Jafor",
    "email": "abujaformdsaleh.2020@gmail.com",
    "birthday": "17-05-1999"
    }
    ```
  All fields are required. `birthday` should be in `DD-MM-YYYY` format.

## Project Description
- In memory storage is used to store the customer data.
- The cron job runs every day at 12:00 AM to check if there is any birthday today.
- If there is any birthday, it sends an email to the customer with a birthday wish. (For demo purpose, the email is sent to the console).
- The cron job is scheduled to run every day at 12:00 AM. You can change the schedule in the `./scheduler/birthdayScheduler.js` file. `scheduledTime` variable is used to set the schedule time.

