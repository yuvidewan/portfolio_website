// 'DOMContentLoaded' ensures the script runs after the HTML document is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
            
    // --- 1. Get All Elements ---
    const sectionCards = document.querySelectorAll('.section-card');
    const backArrows = document.querySelectorAll('.inbuilt-back-arrow');
    const funModeToggle = document.getElementById('fun-mode-toggle');
    const proModeGrid = document.getElementById('pro-mode-grid');
    const funModeGrid = document.getElementById('fun-mode-grid');
    const jokeModal = document.getElementById('joke-modal');
    const jokeModalText = document.getElementById('joke-modal-text');
    const jokeModalClose = document.getElementById('joke-modal-close');
    const bodyEl = document.body; // Get the body element

    // --- 2. Joke Database ---
    const jokeList = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "What do you call fake spaghetti? An impasta!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "Why did the web developer break up with the graphic designer? He said she had too many issues.",
        "What's a developer's favorite snack? A byte.",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem."
    ];

    // --- 3. Core Functions ---

    // Function to close any currently open page
    function closeAllPages() {
        const activePages = document.querySelectorAll('.page-section.is-active');
        activePages.forEach(page => {
            page.classList.remove('is-active');
        });
        // **SCROLL FIX:** Unlock the body when all pages are closed
        bodyEl.classList.remove('page-is-open');
    }

    // Function to show the joke modal
    function showRandomJoke() {
        const randomIndex = Math.floor(Math.random() * jokeList.length);
        jokeModalText.textContent = jokeList[randomIndex];
        jokeModal.classList.add('is-active');
    }

    // Function to close the joke modal
    function closeJokeModal() {
        jokeModal.classList.remove('is-active');
    }

    // --- 4. Event Listeners ---

    // Original listener for opening pages (works for ALL cards)
    sectionCards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.dataset.target;
            const targetPage = document.getElementById(targetId);

            if (targetPage) {
                // Close any *other* page first before opening a new one
                closeAllPages(); 
                // Open the new page
                targetPage.classList.add('is-active');
                
                // **SCROLL FIX:** Lock the body scroll
                bodyEl.classList.add('page-is-open');
            }
        });
    });

    // Original listener for closing pages
    backArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const parentPage = arrow.closest('.page-section');
            if (parentPage) {
                parentPage.classList.remove('is-active');
                
                // **SCROLL FIX:** Unlock the body scroll
                bodyEl.classList.remove('page-is-open');
            }
        });
    });

    // --- NEW: Fun Mode Toggle Listener ---
    funModeToggle.addEventListener('change', () => {
        if (funModeToggle.checked) {
            // --- Switch to Fun Mode ---
            document.body.classList.add('fun-mode-active');
            closeAllPages(); // This will also remove 'page-is-open' class
            proModeGrid.style.display = 'none';
            funModeGrid.style.display = 'block';
            showRandomJoke(); // Show the joke
        } else {
            // --- Switch back to Pro Mode ---
            document.body.classList.remove('fun-mode-active');
            closeAllPages(); // This will also remove 'page-is-open' class
            proModeGrid.style.display = 'block';
            funModeGrid.style.display = 'none';
        }
    });

    // --- NEW: Joke Modal Close Listeners ---
    jokeModalClose.addEventListener('click', closeJokeModal);
    jokeModal.addEventListener('click', (e) => {
        // Only close if they click the dark overlay, not the content box
        if (e.target === jokeModal) {
            closeJokeModal();
        }
    });

});

