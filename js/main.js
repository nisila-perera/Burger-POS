import { loginC, loginA, loadCashierName } from './auth.js';
import { searchCustomerFromMobile, loadSelectedCustomer } from './customers.js';
import { setupItemSearch } from './items.js';
import { newOrder, loadOrderId, addToOrder, printBill } from './order.js';
import { proceedOrder } from './utils.js';

function initializePage() {
  const path = window.location.pathname;

  if (path.includes('index.html')) {
    document.getElementById('loginButton').addEventListener('click', loginC);
  } else if (path.includes('admin.html')) {
    document.getElementById('loginButton').addEventListener('click', loginA);
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

// Make functions globally available
window.proceedOrder = proceedOrder;
window.addToOrder = addToOrder;
