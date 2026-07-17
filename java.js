let player;

// 1. Load the YouTube Iframe API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. Triggered when API is ready
function onYouTubeIframeAPIReady() {
    console.log("YouTube API Ready.");
    player = new YT.Player('youtube-audio-player', {
        height: '0',
        width: '0',
        videoId: 'f_bH7HpxVf8', // Sleep Token ID
        playerVars: {
            'playsinline': 1,
            'controls': 0,
            'disablekb': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onError': onPlayerError // Added to catch hidden blocks
        }
    });
}

function onPlayerReady(event) {
    console.log("Player is loaded and ready.");
    const enterBtn = document.getElementById('enter-btn');
    
    if (!enterBtn) {
        console.error("Could not find an element with id='enter-btn'!");
        return;
    }

    enterBtn.addEventListener('click', () => {
        console.log("Button clicked. Attempting to play track...");
        player.playVideo();
        enterBtn.style.display = 'none'; 
    });
}

function onPlayerError(event) {
    console.error("YouTube Player Error Code:", event.data);
    alert("YouTube blocked embedding for this specific video layout.");
}