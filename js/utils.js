import { searchCustomerByUsername } from './customers.js';

export function proceedOrder(username) {
  const selectedCustomer = searchCustomerByUsername(username);
  if (selectedCustomer) {
    localStorage.setItem('selectedCustomer', JSON.stringify(selectedCustomer));
    window.location.href = 'cashier_order.html';
  } else {
    console.error('Customer not found');
  }
}