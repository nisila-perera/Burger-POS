// Cashier Login
const cashier_users = [{ username: "nimal", name: "Nimal", password: "1234" }];

function loginC() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let cUser = cashier_users.find(user => user.username === username && user.password === password);

  if (cUser) {
    localStorage.setItem('loggedInCashier', JSON.stringify(cUser));
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

  let aUser = admin_users.find(user => user.username === username && user.password === password);

  if (aUser) {
    window.location.href = `admin_home.html`;
  } else {
    alert("Login failed. Please check your username and password.");
  }
}

function loadCashierName() {
  const storedCashier = localStorage.getItem('loggedInCashier');
  if (storedCashier) {
    const cashier = JSON.parse(storedCashier);
    const cashierNameElement = document.getElementById('cashier');
    if (cashierNameElement) {
      cashierNameElement.textContent = cashier.name;
    }
  }
}

export { loginC, loginA, loadCashierName };
