const customers = [
  {
    username: "siripala",
    name: "Siripala",
    password: "1234",
    mobile: "0760702896",
    address: "Moratuwa",
  },
  {
    username: "kapila",
    name: "Kapila",
    password: "1234",
    mobile: "0777705872",
    address: "Katubadda",
  },
  {
    username: "nimala",
    name: "Nimala",
    password: "1234",
    mobile: "0774245872",
    address: "Galle",
  },
  {
    username: "sumanapala",
    name: "Sumanapala",
    password: "1234",
    mobile: "0753602896",
    address: "Panadura",
  },
];

function searchCustomerFromMobile() {
  const searchInput = document.getElementById("customerMobile").value;
  const resultsContainer = document.getElementById("searchResults");
  resultsContainer.innerHTML = "";

  const matchingCustomers = customers.filter((customer) =>
    customer.mobile.includes(searchInput)
  );

  if (matchingCustomers.length === 0) {
    resultsContainer.innerHTML = `
        <p>No Customer Found, Want to add customer with ${searchInput} mobile number?</p>
        <a href="add_customer.html"><button class="btn btn-primary btn-sm btn1 addBtn ">Add New Customer</button></a>
        `;
  } else {
    matchingCustomers.forEach((customer, index) => {
      const customerDiv = document.createElement("div");
      customerDiv.className =
        "customer-result d-flex justify-content-between align-items-center";
      customerDiv.innerHTML = `
                <p>Name: ${customer.name} &nbsp; | &nbsp; Mobile: ${customer.mobile} &nbsp; | &nbsp; Address: ${customer.address}</p>
                <button class="btn btn-primary btn-sm btn1 proceedBtn" onclick="proceedOrder('${customer.username}')">Proceed Order</button>
            `;
      resultsContainer.appendChild(customerDiv);
    });
  }
}

function searchCustomerByUsername(username) {
  return customers.find(customer => customer.username === username) || null;
}

function loadSelectedCustomer() {
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

export { searchCustomerFromMobile, searchCustomerByUsername, loadSelectedCustomer };
