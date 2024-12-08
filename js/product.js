// Function to show the featured products section
function showFeaturedProducts() {
    // Hide all other sections (if you want)
    document.querySelectorAll('main > section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the featured products section
    document.getElementById('featuredProducts').style.display = 'block';

    // Optional: Scroll to the featured products section
    document.getElementById('featuredProducts').scrollIntoView({ behavior: 'smooth' });
}

// Ensure the function runs after the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add an event listener to the "Product" link
    document.querySelector('a[href="javascript:void(0);"]').addEventListener('click', showFeaturedProducts);
});
