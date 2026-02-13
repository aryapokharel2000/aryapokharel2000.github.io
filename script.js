// 14 Cheesy, Long-Distance Bouquets with your personal touches!
const bouquets = [
    { emoji: "🌻", name: "Sunshine Bouquet", message: "Sending a little sunshine all the way to Butwal for you." },
    { emoji: "🌷", name: "Tulip Bouquet", message: "Every minute we are apart is a minute I spend missing you." },
    { emoji: "🌼", name: "Daisy Bouquet", message: "The distance between us is temporary cutu, but mero maya is permanent." },
    { emoji: "🌸", name: "Cherry Blossoms", message: "Just counting down the hours so I can finally hold you again." },
    { emoji: "🪻", name: "Lavender Bouquet", message: "I wish I could teleport from Kathmandu right to your doorstep and do notty stuffs" },
    { emoji: "🌺", name: "Tropical Bouquet", message: "No matter how many miles are between us, you are always in my heart." },
    { emoji: "🥀", name: "Single Red Rose", message: "Because one look at you makes all the waiting worth it." },
    { emoji: "🏵️", name: "Marigold Bouquet", message: "You are my favorite notification and my favorite thought." },
    { emoji: "💮", name: "White Peonies", message: "I can't wait to see that beautiful smile of yours in person." },
    { emoji: "💐", name: "Wildflower Bouquet", message: "I love you more than words, texts, and video calls can say." },
    { emoji: "🌹", name: "Rose Gold Bouquet", message: "Almost there! Keep opening, my love." },
    { emoji: "🍫", name: "Chocolate Bouquet", message: "Something sweet, but still not as sweet as the day we reunite." },
    { emoji: "🧸", name: "Teddy Bear & Roses", message: "A virtual hug until I can give you a real one!" },
    { emoji: "💖", name: "My Heart", message: "Happy Valentine's Day! timi mero hau mero bhayerai hami jasko lagi lekheni timi mero hau mero bhayera hami hehehe luv you cutulii 🥰" }
];

const btn = document.getElementById('reveal-btn');
const emojiDisp = document.getElementById('gift-emoji');
const nameDisp = document.getElementById('gift-name');
const msgDisp = document.getElementById('gift-message');
const grid = document.getElementById('collection-grid');

let currentGiftIndex = 0;
let finalUnlockTime = null;
let cheatDetected = false;

// Anti-Cheat: Secret console message if she opens Developer Tools
console.log("%cHey cutuli! I see you checking the console... no cheating allowed! hmphh only hmphh", "color: #ff4d6d; font-size: 16px; font-weight: bold;");

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

// Build the Memory Box Grid
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

// Start with everything locked
buildGrid(0);

// The Click Logic
btn.addEventListener('click', () => {
    // 1. If she previously cheated, keep displaying the hmphh message
    if (cheatDetected) {
        emojiDisp.innerText = "😒";
        nameDisp.innerText = "Caught You Cheating!";
        msgDisp.innerText = "hmphh only hmphh";
        return;
    }

    // 2. Anti-Cheat Check: If she tries to click the final button before 24 hours
    if (currentGiftIndex === 13 && Date.now() < finalUnlockTime) {
        cheatDetected = true;
        emojiDisp.innerText = "😒";
        nameDisp.innerText = "Naughty Naughty!";
        msgDisp.innerText = "hmphh only hmphh";
        btn.innerText = "hmphh only hmphh";
        btn.disabled = true;
        
        emojiDisp.classList.remove('pop-animation');
        void emojiDisp.offsetWidth;
        emojiDisp.classList.add('pop-animation');
        return;
    }

    // 3. Reveal the Current Gift
    const bouquet = bouquets[currentGiftIndex];
    
    // Re-trigger animation
    emojiDisp.classList.remove('pop-animation');
    void emojiDisp.offsetWidth;
    emojiDisp.classList.add('pop-animation');

    emojiDisp.innerText = bouquet.emoji;
    nameDisp.innerText = bouquet.name;
    msgDisp.innerText = bouquet.message;

    // 4. Unlock it in the grid below
    currentGiftIndex++;
    buildGrid(currentGiftIndex);

    // 5. If she just opened Gift #13, lock everything for 24 hours!
    if (currentGiftIndex === 13) {
        // Set unlock time to exactly 24 hours from right now
        finalUnlockTime = Date.now() + (24 * 60 * 60 * 1000);
        btn.disabled = true;

        const timer = setInterval(() => {
            const now = Date.now();
            const diff = finalUnlockTime - now;

            if (diff <= 0) {
                // 24 hours have passed!
                clearInterval(timer);
                btn.disabled = false;
                btn.innerText = "Open your final Valentine's gift! 💖";
            } else {
                // Calculate hours, minutes, seconds
                const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const m = Math.floor((diff / 1000 / 60) % 60);
                const s = Math.floor((diff / 1000) % 60);
                btn.innerText = `Final gift in ${h}h ${m}m ${s}s ⏳`;
            }
        }, 1000);
        
        return; // Stop here so button text doesn't change
    }

    // 6. Check if she finished all 14 gifts safely
    if (currentGiftIndex >= bouquets.length) {
        btn.innerText = "I cannot wait to see you! ❤️";
        btn.disabled = true;
        return;
    }

    // 7. For gifts 1 through 12, just let her keep clicking instantly!
    btn.innerText = "Open next surprise! 🎁";
});
