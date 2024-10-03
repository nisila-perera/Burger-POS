export const customers = [
  { username: "siripala", name: "Siripala", mobile: "0760702896", address: "Moratuwa" },
  { username: "kapila", name: "Kapila", mobile: "0777705872", address: "Katubadda" },
  { username: "nimala", name: "Nimala", mobile: "0774245872", address: "Galle" },
  { username: "sumanapala", name: "Sumanapala", mobile: "0753602896", address: "Panadura" },
];

export function searchCustomerFromMobile() {
  const searchInput = document.getElementById("customerMobile").value;
  const resultsContainer = document.getElementById("searchResults");
  resultsContainer.innerHTML = "";

  if (searchInput.length === 0) return;

  const matchingCustomers = customers.filter(customer => customer.mobile.includes(searchInput));

  if (matchingCustomers.length === 0) {
    resultsContainer.innerHTML = `
      <p>No Customer Found, Want to add customer with ${searchInput} mobile number?</p>
      <button class="btn btn-primary btn-sm btn1 addBtn" onclick="redirectToAddCustomer('${searchInput}')">Add New Customer</button>
    `;
  } else {
    matchingCustomers.forEach(customer => {
      const customerDiv = document.createElement("div");
      customerDiv.className = "customer-result d-flex justify-content-between align-items-center";
      customerDiv.innerHTML = `
        <p>Name: ${customer.name} &nbsp; | &nbsp; Mobile: ${customer.mobile} &nbsp; | &nbsp; Address: ${customer.address}</p>
        <button class="btn btn-primary btn-sm btn1 proceedBtn" onclick="proceedOrder('${customer.username}')">Proceed Order</button>
      `;
      resultsContainer.appendChild(customerDiv);
    });
  }
}

export function searchCustomerByUsername(username) {
  return customers.find(customer => customer.username === username) || null;
}

export function loadSelectedCustomer() {
  const storedCustomer = localStorage.getItem('selectedCustomer');
  if (storedCustomer) {
    const customer = JSON.parse(storedCustomer);
    const customerNameElement = document.getElementById('customerName');
    if (customerNameElement) {
      customerNameElement.textContent = customer.name;
    }
    localStorage.removeItem('selectedCustomer');
  }
}

export function redirectToAddCustomer(mobileNumber) {
  localStorage.setItem('newCustomerMobile', mobileNumber);
  window.location.href = 'add_customer.html';
}