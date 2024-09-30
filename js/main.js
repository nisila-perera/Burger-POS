import { loginC, loginA, loadCashierName } from './auth.js';
import { searchCustomerFromMobile, loadSelectedCustomer, redirectToAddCustomer } from './customers.js';
import { setupItemSearch } from './items.js';
import { newOrder, loadOrderId, addToOrder, printBill } from './order.js';
import { proceedOrder } from './utils.js';

// Make functions globally available
window.loginC = loginC;
window.loginA = loginA;
window.proceedOrder = proceedOrder;
window.addToOrder = addToOrder;
window.searchCustomerFromMobile = searchCustomerFromMobile;
window.redirectToAddCustomer = redirectToAddCustomer;

function initializePage() {
  const path = window.location.pathname;

  if (path.includes('index.html')) {
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
      loginButton.addEventListener('click', () => {
        console.log('Login button clicked');
        loginC();
      });
    } else {
      console.error('Login button not found');
    }
  } else if (path.includes('admin.html')) {
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
      loginButton.addEventListener('click', loginA);
    } else {
      console.error('Admin login button not found');
    }
  } else if (path.includes('cashier_home.html')) {
    loadCashierName();
    document.getElementById('customerMobile').addEventListener('input', searchCustomerFromMobile);
  } else if (path.includes('cashier_order.html')) {
    loadCashierName();
    loadSelectedCustomer();
    loadOrderId();
    setupItemSearch();
    document.querySelector('.navbar-brand').addEventListener('click', newOrder);
    document.getElementById('printBillBtn').addEventListener('click', printBill);
  }
}

document.addEventListener('DOMContentLoaded', initializePage);

// For debugging
console.log('main.js loaded');
console.log('loginC function:', loginC);