let currentOrderId = 1;

function generateOrderId() {
    return currentOrderId++;
}

function newOrder() {
    const orderId = generateOrderId();
    document.getElementById('orderId').textContent = orderId.toString().padStart(4, '0');
    document.getElementById('orderItems').innerHTML = '';
    document.getElementById('orderTotal').textContent = 'LKR 0';
    localStorage.setItem('currentOrderId', currentOrderId);
}

function loadOrderId() {
    const storedOrderId = localStorage.getItem('currentOrderId');
    if (storedOrderId) {
        currentOrderId = parseInt(storedOrderId);
    }
    newOrder();
}

function addToOrder(name, price) {
  const orderItems = document.getElementById('orderItems');
  const totalElement = document.getElementById('orderTotal');
  
  const listItem = document.createElement('li');
  listItem.innerHTML = `${name} <span class="float-end">1 LKR ${price}</span>`;
  
  orderItems.appendChild(listItem);
  
  const currentTotal = parseInt(totalElement.textContent.replace('LKR ', '')) || 0;
  const newTotal = currentTotal + price;
  totalElement.textContent = `LKR ${newTotal}`;
}

function printBill() {
  const orderId = document.getElementById('orderId').textContent;
  const customerName = document.getElementById('customerName').textContent;
  const orderItems = document.getElementById('orderItems').innerHTML;
  const total = document.getElementById('orderTotal').textContent;

  const printWindow = window.open('', '', 'height=600,width=800');
  printWindow.document.write(`
    <html>
      <head>
        <title>Bill</title>
        <style>
          body { font-family: Arial, sans-serif; }
          .bill-header { text-align: center; margin-bottom: 20px; }
          .bill-details { margin-bottom: 20px; }
          .bill-items { margin-bottom: 20px; }
          .bill-total { text-align: right; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="bill-header">
          <h1>Bill</h1>
        </div>
        <div class="bill-details">
          <p><strong>Order ID:</strong> ${orderId}</p>
          <p><strong>Customer:</strong> ${customerName}</p>
        </div>
        <div class="bill-items">
          <h3>Order Items:</h3>
          <ul>${orderItems}</ul>
        </div>
        <div class="bill-total">
          <p>${total}</p>
        </div>
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}

export { newOrder, loadOrderId, addToOrder, printBill };
