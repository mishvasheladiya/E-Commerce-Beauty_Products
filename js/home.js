function addToCard(name, price, image) {
  const card = JSON.parse(localStorage.getItem('card')) || [];

  // Check if the item already exists in the card
  const existingItem = card.find(item => item.name === name);
  if (existingItem) {
      existingItem.quantity += 1;
  } else {
      card.push({ name, price, image, quantity: 1 });
  }

  localStorage.setItem('card', JSON.stringify(card));
  alert(`${name} added to card`);
}
