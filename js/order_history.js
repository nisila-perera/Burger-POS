// order_history.js

import { loadCashierName } from './auth.js';

/**
 * Initialize the order history page
 */
export function initializeOrderHistory() {
    loadCashierName();
    displayOrderHistory();
}

/**
 * Display the order history
 */
export function displayOrderHistory() {
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    const orderHistoryContainer = document.getElementById('orderHistory');

    orderHistory.forEach(order => {
        const card = createOrderCard(order);
        orderHistoryContainer.appendChild(card);
    });
}

/**
 * Create an order card element
 * @param {Object} order - The order details
 * @returns {HTMLElement} The order card element
 */
export function createOrderCard(order) {
    const card = document.createElement('div');
    card.className = 'col';
    card.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Order #${order.orderId}</h5>
                <h6 class="card-subtitle mb-2 customer-name">Customer: ${order.customerName}</h6>
                <p class="card-text">
                    <strong>Items:</strong>
                    <ul>
                        ${order.items.map(item => `<li>${item.name} - LKR ${item.price}</li>`).join('')}
                    </ul>
                </p>
                <p class="card-text"><strong>Total:</strong> LKR ${order.total}</p>
                <p class="card-text"><small class="order-date">Date: ${new Date(order.date).toLocaleString()}</small></p>
            </div>
        </div>
    `;
    return card;
}

// Initialize the page when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeOrderHistory);