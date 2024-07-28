// Cashier Login
const cashier_users = [
    { username: 'nimal', name: 'Nimal', password: '1234'}
];

function loginC() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let cUser;
    for (let i = 0; i < cashier_users.length; i++) {
        if (cashier_users[i].username === username && cashier_users[i].password === password) {
            cUser = cashier_users[i];
            break;
        }
    }

    if (cUser) {
        window.location.href = `cashier_home.html`;
    } else {
        alert('Login failed. Please check your username and password.');
    }
}

// Admin Login
const admin_users = [
    { username: 'saman', name: 'Saman', password: '1234'}
];

function loginA() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let aUser;
    for (let i = 0; i < cashier_users.length; i++) {
        if (cashier_users[i].username === username && cashier_users[i].password === password) {
            aUser = cashier_users[i];
            break;
        }
    }

    if (aUser) {
        window.location.href = `admin_home.html`;
    } else {
        alert('Login failed. Please check your username and password.');
    }
}

// Customers
const customers = [
    { username: 'siripala', name: 'Siripala', password: '1234', mobile: '0760702896', address: 'Moratuwa'},
    { username: 'kapila', name: 'Kapila', password: '1234', mobile: '0777705872', address: 'Katubadda'},
    { username: 'nimala', name: 'Nimala', password: '1234', mobile: '0774245872', address: 'Galle'},
    { username: 'sumanapala', name: 'Sumanapala', password: '1234', mobile: '0753602896', address: 'Panadura'}
];

// Customer Search
function searchC() {
    const searchInput = document.getElementById('customerMobile').value;
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    const matchingCustomers = customers.filter(customer => customer.mobile.includes(searchInput));

    if (matchingCustomers.length === 0) {
        resultsContainer.innerHTML = '<p>No customers found.</p>';
    } else {
        matchingCustomers.forEach((customer, index) => {
            const customerDiv = document.createElement('div');
            customerDiv.className = 'customer-result d-flex justify-content-between align-items-center';
            customerDiv.innerHTML = `
                <p>Name: ${customer.name} &nbsp; | &nbsp; Mobile: ${customer.mobile} &nbsp; | &nbsp; Address: ${customer.address}</p>
                <button class="btn btn-primary btn-sm btn1 proceedBtn" onclick="proceedOrder('${customer.username}')">Proceed Order</button>
            `;
            resultsContainer.appendChild(customerDiv);
        });
    }
}

function proceedOrder(username) {
    const customer = customers.find(c => c.username === username);
    console.log(`Proceeding with order for ${customer.name}`);
}