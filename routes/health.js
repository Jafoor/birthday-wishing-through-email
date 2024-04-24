const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    const uptime = process.uptime();
    const memoryUsage = process.memoryUsage();
    const currentTime = new Date();

    res.status(200).json({
        message: 'Server is running fine and healthy 😊',
        uptime: `Server has been running for ${uptime} seconds`,
        memoryUsage: `Current memory usage is ${JSON.stringify(memoryUsage)}`,
        currentTime: `Current server time is ${currentTime}`
    });
});

module.exports = router;