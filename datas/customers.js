let customers = [];

function addCustomer(customer) {
    customers.push(customer);
}

function getCustomers() {
    return customers;
}

function getCustomerByEmail(email) {
    return customers.find(customer => customer.email === email);
}

module.exports = {
    addCustomer,
    getCustomers,
    getCustomerByEmail
};