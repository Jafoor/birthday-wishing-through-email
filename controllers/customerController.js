const { addCustomer } = require('../datas/customers');

exports.registerCustomer = async (req, res, next) => {
    try {
        const customer = req.customer;
        addCustomer(customer);
        res.status(200).json({ message: 'Customer registered successfully' });
    } catch(err) {
        next(err);
    }
}