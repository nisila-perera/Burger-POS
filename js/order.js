let currentOrderId = 1;

export function generateOrderId() {
  return currentOrderId++;
}

export function newOrder() {
  const orderId = generateOrderId();
  document.getElementById('orderId').textContent = padOrderId(orderId);
  document.getElementById('orderItems').innerHTML = '';
  document.getElementById('orderTotal').textContent = 'LKR 0';
  localStorage.setItem('currentOrderId', currentOrderId);
}

function padOrderId(orderId) {
  return orderId.toString().padStart(4, '0');
}

export function loadOrderId() {
  const storedOrderId = localStorage.getItem('currentOrderId');
  if (storedOrderId) {
    currentOrderId = parseInt(storedOrderId);
  }
  newOrder();
}

export function addToOrder(name, price) {
  const orderItems = document.getElementById('orderItems');
  const totalElement = document.getElementById('orderTotal');
  
  const listItem = document.createElement('li');
  listItem.innerHTML = `${name} <span class="float-end">1 LKR ${price}</span>`;
  orderItems.appendChild(listItem);
  
  const currentTotal = parseInt(totalElement.textContent.replace('LKR ', '')) || 0;
  const newTotal = currentTotal + price;
  totalElement.textContent = `LKR ${newTotal}`;
}

export function printBill() {
  var orderId = document.getElementById('orderId').textContent;
  var customerName = document.getElementById('customerName').textContent;
  var orderItems = document.getElementById('orderItems').innerHTML;
  var total = document.getElementById('orderTotal').textContent;

  var printWindow = window.open('', '', 'height=600,width=800');

  printWindow.document.write('<!DOCTYPE html><html><head><title>Bill</title>');
  printWindow.document.write('<style>');
  printWindow.document.write('body { font-family: Arial, sans-serif; background-color: #1a1a1a; color: white; padding: 20px; }');
  printWindow.document.write('.bill-header { text-align: center; margin-bottom: 20px; background-color: #2a2a2a; padding: 20px; border-radius: 10px; }');
  printWindow.document.write('.bill-details, .bill-items, .bill-total { margin-bottom: 20px; background-color: #2a2a2a; padding: 20px; border-radius: 10px; }');
  printWindow.document.write('.bill-total { text-align: right; font-weight: bold; }');
  printWindow.document.write('ul { list-style-type: none; padding: 0; }');
  printWindow.document.write('li { margin-bottom: 10px; }');
  printWindow.document.write('</style></head><body>');
  printWindow.document.write('<div class="bill-header"><h1>Bill</h1></div>');
  printWindow.document.write('<div class="bill-details"><p><strong>Order ID:</strong> ' + orderId + '</p>');
  printWindow.document.write('<p><strong>Customer:</strong> ' + customerName + '</p></div>');
  printWindow.document.write('<div class="bill-items"><h3>Order Items:</h3><ul>' + orderItems + '</ul></div>');
  printWindow.document.write('<div class="bill-total"><p>' + total + '</p></div>');
  printWindow.document.write('</body></html>');
  
  printWindow.document.close();
  printWindow.print();

  saveOrderToHistory();
  newOrder();
}

export function saveOrderToHistory() {
  const orderId = document.getElementById('orderId').textContent;
  const customerName = document.getElementById('customerName').textContent;
  const orderItems = Array.from(document.getElementById('orderItems').children).map(item => {
      const [name, price] = item.textContent.split('LKR ');
      return { name: name.trim(), price: parseInt(price) };
  });
  const total = parseInt(document.getElementById('orderTotal').textContent.replace('LKR ', ''));

  const order = {
      orderId,
      customerName,
      items: orderItems,
      total,
      date: new Date().toISOString()
  };

  const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
  orderHistory.push(order);
  localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
}

window.newOrder = newOrder;
window.loadOrderId = loadOrderId;
window.addToOrder = addToOrder;
window.printBill = printBill;