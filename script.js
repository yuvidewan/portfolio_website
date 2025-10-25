// 'DOMContentLoaded' ensures the script runs after the HTML document is fully loaded.
// This is good practice, especially since the script.js file is linked with 'defer'.
document.addEventListener('DOMContentLoaded', () => {
            
    // Get all clickable cards
    const sectionCards = document.querySelectorAll('.section-card');
    
    // Get all "back" arrows
    const backArrows = document.querySelectorAll('.inbuilt-back-arrow');

    // --- Function to open a page ---
    sectionCards.forEach(card => {
        card.addEventListener('click', () => {
            // 1. Get the target page ID from the card's 'data-target' attribute
            const targetId = card.dataset.target;
            const targetPage = document.getElementById(targetId);

            // 2. Add the 'is-active' class to the target page to make it visible
            if (targetPage) {
                targetPage.classList.add('is-active');
            }
        });
    });

    // --- Function to close a page ---
    backArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            // 1. Find the parent page of the arrow that was clicked
            const parentPage = arrow.closest('.page-section');

            // 2. Remove the 'is-active' class to hide it
            if (parentPage) {
                parentPage.classList.remove('is-active');
            }
        });
    });

});