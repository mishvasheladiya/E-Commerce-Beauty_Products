document.addEventListener('DOMContentLoaded', function() {
    displayCardItems();
});

function displayCardItems() {
    const cardItems = JSON.parse(localStorage.getItem('card')) || [];
    const cardItemsContainer = document.querySelector('.card-items');
    cardItemsContainer.innerHTML = '';

    let total = 0;

    cardItems.forEach((item, index) => {
        const cardItem = document.createElement('div');
        cardItem.classList.add('card-item');
        cardItem.innerHTML = `
            <div class="card-item-details">
                <img src="${item.image}" alt="${item.name}" class="product-image">
                <div>
                    <h4>${item.name}</h4>
                    <p>Price: ₹${item.price.toFixed(2)}</p>
                    <div class="card-item-quantity">
                        <label for="quantity${index}">Quantity:</label>
                        <input type="number" id="quantity${index}" name="quantity" value="${item.quantity}" min="1" onchange="updateCardItem(${index}, this.value)">
                    </div>
                    <p class="card-item-total">Total: ₹${(item.price * item.quantity).toFixed(2)}</p>
                </div>
            </div>
            <button class="card-item-remove" onclick="removeCardItem(${index})">Remove</button>
        `;
        cardItemsContainer.appendChild(cardItem);

        total += item.price * item.quantity;
    });

    updateCardTotal(total);
}

function removeCardItem(index) {
    const cardItems = JSON.parse(localStorage.getItem('card')) || [];
    cardItems.splice(index, 1);
    localStorage.setItem('card', JSON.stringify(cardItems));
    displayCardItems();
}

function updateCardItem(index, quantity) {
    const cardItems = JSON.parse(localStorage.getItem('card')) || [];
    cardItems[index].quantity = parseInt(quantity);
    localStorage.setItem('card', JSON.stringify(cardItems));
    displayCardItems();
}

function updateCardTotal(total) {
    document.querySelector('.order-summary .order-total').textContent = 'Total: ₹' + total.toFixed(2);
}
