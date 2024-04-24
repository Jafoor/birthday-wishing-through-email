const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
const { errorHandler } = require('./middlewares/errorHandler');
const health = require('./routes/health');
const customer = require('./routes/customers');
const { scheduleBirthday } = require('./scheduler/birthdayScheduler');
const events = require('events');

const app = express();

const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/health', health);
app.use('/customer', customer);

app.use(errorHandler);

const eventEmitter = new events.EventEmitter();

app.listen(port, () => {
  console.log(`Server is running on port ${port}\nVisit http://localhost:${port}/health to check the health of the server.`);
  eventEmitter.emit('serverStarted');
});

scheduleBirthday(eventEmitter);