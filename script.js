// --- YOUTUBE MUSIC PLAYER SETUP ---
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '10',
        width: '10',
        videoId: '5CeZT3B4faU',  // Your song
        host: 'https://www.youtube-nocookie.com',
        playerVars: { 
            'autoplay': 0, 
            'controls': 0, 
            'start': 110   // 1:50
        },
        events: {
            'onReady': function(event) {
                event.target.setVolume(30); 
            }
        }
    });
}

// Generate Floating Hearts Background
const bg = document.getElementById('hearts-bg');
for(let i=0; i<15; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = "🤍";
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";
    heart.style.animationDelay = (Math.random() * 5) + "s";
    bg.appendChild(heart);
}

// Button Click Logic
const btn = document.getElementById('open-letter-btn');

btn.addEventListener('click', () => {
    // 1. Play the music
    if (player && typeof player.playVideo === 'function') {
        player.playVideo();
    }

    // 2. Hide the entry screen
    document.getElementById('entry-screen').style.display = 'none';

    // 3. Reveal the handwritten letter smoothly
    const finalLetter = document.getElementById('final-letter');
    finalLetter.style.display = 'flex';
    finalLetter.classList.add('pop-animation');
});
