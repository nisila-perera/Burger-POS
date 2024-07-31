// Cashier Login

const cashier_users = [{ username: "nimal", name: "Nimal", password: "1234" }];

function loginC() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let cUser;
  for (let i = 0; i < cashier_users.length; i++) {
    if (
      cashier_users[i].username === username &&
      cashier_users[i].password === password
    ) {
      cUser = cashier_users[i];
      break;
    }
  }

  if (cUser) {
    window.location.href = `cashier_home.html`;
  } else {
    alert("Login failed. Please check your username and password.");
  }
}

// Admin Login

const admin_users = [{ username: "saman", name: "Saman", password: "1234" }];

function loginA() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let aUser;
  for (let i = 0; i < cashier_users.length; i++) {
    if (
      cashier_users[i].username === username &&
      cashier_users[i].password === password
    ) {
      aUser = cashier_users[i];
      break;
    }
  }

  if (aUser) {
    window.location.href = `admin_home.html`;
  } else {
    alert("Login failed. Please check your username and password.");
  }
}

// Customers

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

// Customer Search By Mobile

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

// Customer Search By Mobile

function searchCustomerByUsername(username) {
  for (let i = 0; i < customers.length; i++) {
    if (customers[i].username === username) {
      return customers[i];
    }
  }
  return null;
}

// Proceed Order Button

let selectedCustomer = null;

function proceedOrder(username) {
  selectedCustomer = searchCustomerByUsername(username);
  window.location.href = `cashier_order.html`;
  console.log(selectedCustomer.username);
}

// Sample items array
const items = [
  { img: "1.jpg", name: "Cheese Burger", price: 500 },
  { img: "2.jpg", name: "Veggie Burger", price: 450 },
  { img: "3.jpg", name: "Chicken Burger", price: 550 },
  { img: "4.jpg", name: "Bacon Burger", price: 800 },
  { img: "5.jpg", name: "Beef Burger", price: 750 },
  { img: "6.jpg", name: "Dobule Burger", price: 650 },
  { img: "7.jpg", name: "Spicy Burger", price: 400 },
  { img: "8.jpg", name: "Ham Burger", price: 650 },
  { img: "9.jpg", name: "Double Cheese Burger", price: 950 },
];


// Function to render items
function renderItems(filteredItems) {
    const itemsContainer = document.getElementById('items');
    itemsContainer.innerHTML = '';  // Clear existing items

    for (let i = 0; i < filteredItems.length; i++) {
        const itemsDiv = document.createElement('div');
        itemsDiv.className = 'col';
        
        const singleItemDiv = document.createElement('div');
        singleItemDiv.className = 'burger-item card';
        
        singleItemDiv.innerHTML = `
            <img src="img/burgers/${filteredItems[i].img}" class="card-img-top mb-lg-3" alt="${filteredItems[i].name}">
            <div class="card-body">
                <h5 class="card-title">${filteredItems[i].name}</h5>
                <p class="card-text">LKR ${filteredItems[i].price}</p>
                <button class="btn btn-primary" onClick="addToOrder('${filteredItems[i].name}', ${filteredItems[i].price})">ADD</button>
            </div>
        `;
        
        itemsDiv.appendChild(singleItemDiv);
        itemsContainer.appendChild(itemsDiv);
    }
}

// Initial render
renderItems(items);

// Event listener for search bar
document.getElementById('search-bar').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));
    renderItems(filteredItems);
});

// Add To Order function
function addToOrder(name, price) {
    console.log("Item Added:", name, price);
}