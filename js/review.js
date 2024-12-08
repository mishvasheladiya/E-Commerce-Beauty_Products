// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const reviews = [
        {
            photo: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            stars: 5,
            statement: 'Great product with noticeable results.'
        },
        {
            photo: 'https://cdn-icons-png.flaticon.com/512/4439/4439977.png',
            stars: 4,
            statement: 'This has become a staple in my daily routine!'
        },
        
    ];

    const reviewContainer = document.querySelector('.review-container');
    
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');

        const img = document.createElement('img');
        img.src = review.photo;
        img.alt = `Reviewer ${reviews.indexOf(review) + 1}`;
        img.classList.add('review-photo');

        const stars = document.createElement('div');
        stars.classList.add('stars');
        stars.textContent = '⭐'.repeat(review.stars);

        const statement = document.createElement('p');
        statement.classList.add('statement');
        statement.textContent = `"${review.statement}"`;

        reviewElement.appendChild(img);
        reviewElement.appendChild(stars);
        reviewElement.appendChild(statement);
        reviewContainer.appendChild(reviewElement);
    });
});
