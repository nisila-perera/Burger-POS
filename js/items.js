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
  
  function renderItems(filteredItems) {
    const itemsContainer = document.getElementById('items');
    itemsContainer.innerHTML = '';
  
    filteredItems.forEach(item => {
      const itemsDiv = document.createElement('div');
      itemsDiv.className = 'col';
      
      itemsDiv.innerHTML = `
        <div class="burger-item card">
          <img src="img/burgers/${item.img}" class="card-img-top mb-lg-3" alt="${item.name}">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">LKR ${item.price}</p>
            <button class="btn btn-primary" onclick="addToOrder('${item.name}', ${item.price})">ADD</button>
          </div>
        </div>
      `;
      
      itemsContainer.appendChild(itemsDiv);
    });
  }
  
  export function setupItemSearch() {
    renderItems(items);
    document.getElementById('search-bar').addEventListener('input', function(event) {
      const query = event.target.value.toLowerCase();
      const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));
      renderItems(filteredItems);
    });
  }