document.addEventListener("DOMContentLoaded", () => {
    const enterBtn = document.getElementById('enter-btn');
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const music = document.getElementById('bg-music');

    // Make sure all elements exist before running code
    if (!enterBtn || !splashScreen || !mainContent || !music) {
        console.error("One or more HTML elements are missing!");
        return;
    }

    enterBtn.addEventListener('click', () => {
        // 1. Play the music file
        music.play()
            .then(() => {
                console.log("Music started successfully!");
                
                // 2. Hide the landing screen
                splashScreen.style.display = 'none';
                
                // 3. Reveal your main content layout
                mainContent.style.display = 'block'; 
            })
            .catch((error) => {
                console.error("Playback failed:", error);
                alert("Click again to grant audio permissions.");
            });
    });
});

