// 1. This global variable will hold our player object
let player;

// 2. Load the YouTube Iframe API asynchronously
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function runs automatically once the YouTube API is ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-audio-player', {
        height: '0',
        width: '0',
        videoId: 'vFHBOKa_ZG0', // YouTube ID for "Take Me Back to Eden"
        playerVars: {
            'playsinline': 1,
            'controls': 0,     // Hide YouTube video controls
            'disablekb': 1    // Disable keyboard shortcuts
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// 4. Once the player is fully loaded in the background, activate the button
function onPlayerReady(event) {
    const enterBtn = document.getElementById('enter-btn');
    
    enterBtn.addEventListener('click', () => {
        // Start playing the music!
        player.playVideo();
        
        // Optional: Hide the button or transition to your main content here
        enterBtn.style.display = 'none'; 
    });
}