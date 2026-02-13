// 14 Cheesy Bouquets
const bouquets = [
    { emoji: "🌻", name: "Sunflower Bouquet", message: "Because you light up my darkest days." },
    { emoji: "🌷", name: "Tulip Bouquet", message: "Our love is blooming more beautifully every day." },
    { emoji: "🌼", name: "Daisy Bouquet", message: "I picked these just to say... I'm crazy for you." },
    { emoji: "🌸", name: "Cherry Blossoms", message: "My love for you is always in full bloom." },
    { emoji: "🪻", name: "Lavender Bouquet", message: "You bring peace and sweet magic to my life." },
    { emoji: "🌺", name: "Tropical Bouquet", message: "For a girl who is as rare and stunning as an island flower." },
    { emoji: "🥀", name: "Single Red Rose", message: "A classic start, because you're my classic love." },
    { emoji: "🏵️", name: "Marigold Bouquet", message: "Golden and bright, exactly like your smile." },
    { emoji: "💮", name: "White Peonies", message: "So elegant, soft, and absolutely perfect—just like you." },
    { emoji: "💐", name: "Wildflower Bouquet", message: "I love you wildly, madly, and completely." },
    { emoji: "🌹", name: "Rose Gold Bouquet", message: "Because you are precious and shine so bright." },
    { emoji: "🍫", name: "Chocolate Bouquet", message: "Flowers are sweet, but you're the sweetest thing I know." },
    { emoji: "🧸", name: "Teddy Bear & Roses", message: "To cuddle when I can't be right there holding you." },
    { emoji: "💖", name: "The Grand Valentine", message: "Happy Valentine's Day! My heart belongs to you, today and forever." }
];

const btn = document.getElementById('reveal-btn');
const emojiDisp = document.getElementById('gift-emoji');
const nameDisp = document.getElementById('gift-name');
const msgDisp = document.getElementById('gift-message');
const countdownDisp = document.getElementById('countdown-display');
const grid = document.getElementById('collection-grid');

// 1. Generate Floating Hearts Background
const bg = document.getElementById('hearts-bg');
for(let i=0; i<15; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = "🤍";
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s"; // Random speed
    heart.style.animationDelay = (Math.random() * 5) + "s";
    bg.appendChild(heart);
}

// 2. Valentine's Day Countdown Logic
function updateCountdown() {
    const now = new Date();
    // Set target to Feb 14 of the current year (Months are 0-indexed in JS, so 1 = Feb)
    const vDay = new Date(now.getFullYear(), 1, 14, 0, 0, 0); 
    
    const diff = vDay - now;

    if (diff <= 0) {
        countdownDisp.innerText = "Happy Valentine's Day! ❤️";
        return true; // Valentine's Day is here!
    } else {
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / 1000 / 60) % 60);
        const secs = Math.floor((diff / 1000) % 60);
        countdownDisp.innerText = `⏳ Unlocking final bouquet in: ${hours}h ${mins}m ${secs}s`;
        return false; // Still waiting
    }
}
// Start countdown ticking every second
setInterval(updateCountdown, 1000);

// 3. Setup the Grid
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
buildGrid(0); // Start with everything locked

// 4. Memory Lane Playback Logic
btn.addEventListener('click', () => {
    btn.disabled = true;
    btn.innerText = "Walking down memory lane... 🚶‍♂️";
    
    let currentDayIndex = 0;
    const isVDay = updateCountdown(); // Check if today is the 14th
    const maxDaysToPlay = isVDay ? 14 : 13; // Play all 14 if it's V-Day, else stop at 13

    // Show a new bouquet every 3.5 seconds
    const playbackTimer = setInterval(() => {
        const bouquet = bouquets[currentDayIndex];
        
        // Re-trigger animation
        emojiDisp.classList.remove('pop-animation');
        void emojiDisp.offsetWidth;
        emojiDisp.classList.add('pop-animation');

        // Update Text
        emojiDisp.innerText = bouquet.emoji;
        nameDisp.innerText = `Day ${currentDayIndex + 1}: ${bouquet.name}`;
        msgDisp.innerText = bouquet.message;

        // Unlock in grid
        buildGrid(currentDayIndex + 1);

        currentDayIndex++;

        // Stop the timer when we reach the max day
        if (currentDayIndex >= maxDaysToPlay) {
            clearInterval(playbackTimer);
            if (!isVDay) {
                btn.innerText = "Come back tomorrow for the Grand Finale! ❤️";
            } else {
                btn.innerText = "I love you! 🥰";
            }
        }
    }, 3500); // 3500 milliseconds = 3.5 seconds per bouquet
});
