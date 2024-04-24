const CustomError = require('../utils/customError');
const { getCustomerByEmail } = require('../datas/customers');

exports.validateCustomer = (req, res, next) => {
    const { name, email, birthday } = req.body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
        throw new CustomError('Invalid name', 400);
    }

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!email || !emailRegex.test(email)) {
        throw new CustomError('Invalid email', 400);
    }

    if (!birthday) {
        throw new CustomError('Missing required fields', 400);
    }

    const [day, month, year] = birthday.split("-");
    if (!day || !month || !year) {
        throw new CustomError('Invalid birthday format. Please use dd-mm-yyyy', 400);
    }
    const birthdayDate = new Date(`${year}-${month}-${day}`);

    if (birthdayDate.toString() === 'Invalid Date') {
        throw new CustomError('Provide valid date. Please use dd-mm-yyyy', 400);
    }

    if (birthdayDate > new Date()) {
        throw new CustomError('Date cannot be in the future', 400);
    }

    if (getCustomerByEmail(email)) {
        throw new CustomError('Customer already registered', 400);
    }

    req.customer = {
        name,
        email,
        birthday: birthdayDate
    }
    next();
}