let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.mySlides');
    slides.forEach((slide) => {
        slide.style.display = 'none'; 
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; 
    }

    slides[slideIndex - 1].style.display = 'block'; 
    setTimeout(showSlides, 2000); 
}

document.addEventListener('DOMContentLoaded', showSlides);

function addToCard(name, price, image) {
    const card = JSON.parse(localStorage.getItem('card')) || [];

    const existingItem = card.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        card.push({ name, price, image, quantity: 1 });
    }

    localStorage.setItem('card', JSON.stringify(card));
    alert(`${name} added to card`);
}
