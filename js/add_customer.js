import { customers } from './customers.js';
import { proceedOrder } from './utils.js';

function setupAddCustomerForm() {
    const mobileInput = document.getElementById('mobile');
    const storedMobile = localStorage.getItem('newCustomerMobile');
    if (storedMobile) {
        mobileInput.value = storedMobile;
        localStorage.removeItem('newCustomerMobile');
    }

    const addCustomerForm = document.getElementById('addCustomerForm');
    addCustomerForm.addEventListener('submit', handleAddCustomer);

    const addAndContinueBtn = document.getElementById('addAndContinue');
    addAndContinueBtn.addEventListener('click', handleAddAndContinue);
}

function handleAddCustomer(event) {
    event.preventDefault();
    const newCustomer = getCustomerData();
    addCustomerToArray(newCustomer);
    alert('Customer added successfully!');
    document.getElementById('addCustomerForm').reset();
}

function handleAddAndContinue(event) {
    event.preventDefault();
    const newCustomer = getCustomerData();
    addCustomerToArray(newCustomer);
    proceedOrder(newCustomer.username);
}

function getCustomerData() {
    return {
        username: document.getElementById('username').value,
        name: document.getElementById('name').value,
        mobile: document.getElementById('mobile').value,
        address: document.getElementById('address').value
    };
}

function addCustomerToArray(newCustomer) {
    customers.push(newCustomer);
    console.log('Updated customers array:', customers);
}

document.addEventListener('DOMContentLoaded', setupAddCustomerForm);