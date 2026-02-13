let player;
let isMusicPlaying = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '10',
        width: '10',
        videoId: 'h_m-BjrxmgI',
        host: 'https://www.youtube-nocookie.com', 
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'start': 0
        },
        events: {
            'onReady': function(event) {
                event.target.setVolume(30); 
            }
        }
    });
}
// -----------------------------------

// 14 Cheesy, Long-Distance Bouquets
const bouquets = [
    { emoji: "🌻", name: "Sunshine Bouquet", message: "Sending a little sunshine all the way to Butwal for you." },
    { emoji: "🌷", name: "Tulip Bouquet", message: "Every minute we are apart is a minute I spend missing you." },
    { emoji: "🌼", name: "Daisy Bouquet", message: "The distance between us is temporary cutu, but mero maya is permanent." },
    { emoji: "🌸", name: "Cherry Blossoms", message: "Kata laijane hola tension bhaisakyo yo hottie lai." },
    { emoji: "🪻", name: "Lavender Bouquet", message: "I wish I could teleport from Kathmandu right to your hyatt and do notty stuffs" },
    { emoji: "🌺", name: "Tropical Bouquet", message: "Timi gunduu ho mero gundu, you are always in my heart." },
    { emoji: "🥀", name: "Single Red Rose", message: "Cause I wanna give you rozzz" },
    { emoji: "🏵️", name: "Marigold Bouquet", message: "You are my favorite notification and my favorite thought." },
    { emoji: "💮", name: "White Peonies", message: "Best of luck for your modelling contest." },
    { emoji: "💐", name: "Wildflower Bouquet", message: "I love you more than words, texts, and video calls can say." },
    { emoji: "🌹", name: "Rose Gold Bouquet", message: "Ajhai duita click..." },
    { emoji: "🍫", name: "Chocolate Bouquet", message: "Timilai chocolate maan pardaina k garnu." },
    { emoji: "🧸", name: "Teddy Bear & Roses", message: "A virtual hug until I can give you a real one!" },
    { emoji: "💖", name: "My Heart", message: "Happy Valentine's Day! Lovee you cutulii 🥰" }
];

const btn = document.getElementById('reveal-btn');
const emojiDisp = document.getElementById('gift-emoji');
const nameDisp = document.getElementById('gift-name');
const msgDisp = document.getElementById('gift-message');
const grid = document.getElementById('collection-grid');

let currentGiftIndex = 0;
let finalUnlockTime = null;
let cheatDetected = false;

console.log("%cOye fatahhh! Bandha garr no cheating allowed! hmphh", "color: #B56576; font-size: 16px; font-weight: bold;");

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

function buildGrid(unlockedCount) {
    grid.innerHTML = "";
    for (let i = 0; i < 14; i++) {
        const item = document.createElement('div');
        item.classList.add('grid-item');
        if (i < unlockedCount) {
            item.innerText = bouquets[i].emoji;
            item.classList.add('unlocked');
        } else {
            item.innerText = "🔒";
            item.classList.add('locked');
        }
        grid.appendChild(item);
    }
}

buildGrid(0);

btn.addEventListener('click', () => {
    // MUSIC TRIGGER: Play the song on her very first click!
    if (!isMusicPlaying && player && typeof player.playVideo === 'function') {
        player.playVideo();
        isMusicPlaying = true;
    }

    if (cheatDetected) {
        emojiDisp.innerText = "😒";
        nameDisp.innerText = "Caught You Cheating!";
        msgDisp.innerText = "hmphh";
        return;
    }

    if (currentGiftIndex === 13 && Date.now() < finalUnlockTime) {
        cheatDetected = true;
        emojiDisp.innerText = "😒";
        nameDisp.innerText = "Last fatah yaar";
        msgDisp.innerText = "hmphh";
        btn.innerText = "hmphh";
        btn.disabled = true;
        
        emojiDisp.classList.remove('pop-animation');
        void emojiDisp.offsetWidth;
        emojiDisp.classList.add('pop-animation');
        return;
    }

    const bouquet = bouquets[currentGiftIndex];
    
    emojiDisp.classList.remove('pop-animation');
    void emojiDisp.offsetWidth;
    emojiDisp.classList.add('pop-animation');

    emojiDisp.innerText = bouquet.emoji;
    nameDisp.innerText = bouquet.name;
    msgDisp.innerText = bouquet.message;

    currentGiftIndex++;
    buildGrid(currentGiftIndex);

    if (currentGiftIndex === 13) {
        finalUnlockTime = Date.now() + (24 * 60 * 60 * 1000);
        btn.disabled = true;

        const timer = setInterval(() => {
            const now = Date.now();
            const diff = finalUnlockTime - now;

            if (diff <= 0) {
                clearInterval(timer);
                btn.disabled = false;
                btn.innerText = "Open your final Valentine's gift! 💖";
            } else {
                const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const m = Math.floor((diff / 1000 / 60) % 60);
                const s = Math.floor((diff / 1000) % 60);
                btn.innerText = `Final gift in ${h}h ${m}m ${s}s ⏳`;
            }
        }, 1000);
        
        return;
    }

    if (currentGiftIndex >= bouquets.length) {
        btn.innerText = "I cannot wait to see you! ❤️";
        btn.disabled = true;
        return;
    }

    btn.innerText = "Open next surprise! 🎁";
});
