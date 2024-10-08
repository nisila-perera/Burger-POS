const cashier_users = [{ username: "nimal", name: "Nimal", password: "1234" }];
const admin_users = [{ username: "saman", name: "Saman", password: "1234" }];

export function loginC() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const cUser = cashier_users.find(user => user.username === username && user.password === password);

  if (cUser) {
    localStorage.setItem('loggedInCashier', JSON.stringify(cUser));
    window.location.href = 'cashier_home.html';
  } else {
    alert("Login failed. Please check your username and password.");
  }
}

export function loginA() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const aUser = admin_users.find(user => user.username === username && user.password === password);

  if (aUser) {
    localStorage.setItem('loggedInAdmin', JSON.stringify(aUser));
    window.location.href = 'admin_home.html';
  } else {
    alert("Login failed. Please check your username and password.");
  }
}

export function loadCashierName() {
  const storedCashier = localStorage.getItem('loggedInCashier');
  if (storedCashier) {
    const cashier = JSON.parse(storedCashier);
    const cashierNameElement = document.getElementById('cashier');
    if (cashierNameElement) {
      cashierNameElement.textContent = cashier.name;
    }
  }
}

export function loadAdminName() {
  const storedAdmin = localStorage.getItem('loggedInAdmin');
  if (storedAdmin) {
    const admin = JSON.parse(storedAdmin);
    const adminNameElement = document.getElementById('admin');
    if (adminNameElement) {
      adminNameElement.textContent = admin.name;
    }
  }
}