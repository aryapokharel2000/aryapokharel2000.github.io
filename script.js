// -----------------------------
// 🎵 YOUTUBE MUSIC PLAYER SETUP
// -----------------------------
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: '5CeZT3B4faU', // Your song
        playerVars: {
            autoplay: 0,
            controls: 0,
            start: 110 // 1:50
        },
        events: {
            onReady: function (event) {
                event.target.setVolume(40);
            }
        }
    });
}


// -----------------------------
// 🤍 FLOATING HEARTS BACKGROUND
// -----------------------------
document.addEventListener("DOMContentLoaded", function () {

    const bg = document.getElementById('hearts-bg');

    if (bg) {
        for (let i = 0; i < 18; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = "🤍";
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = (Math.random() * 5 + 8) + "s";
            heart.style.animationDelay = (Math.random() * 5) + "s";
            bg.appendChild(heart);
        }
    }


    // -----------------------------
    // 💌 BUTTON CLICK LOGIC
    // -----------------------------
    const btn = document.getElementById('open-letter-btn');
    const entryScreen = document.getElementById('entry-screen');
    const finalLetter = document.getElementById('final-letter');

    if (btn && entryScreen && finalLetter) {

        btn.addEventListener('click', function () {

            // Play music safely
            if (player && typeof player.playVideo === "function") {
                player.playVideo();
            }

            // Hide entry screen
            entryScreen.style.display = "none";

            // Show letter with animation
            finalLetter.style.display = "flex";
            finalLetter.classList.add("pop-animation");
        });
    }

});
