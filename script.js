// Array of 14 different gifts
const gifts = [
    { emoji: "💌", name: "Love Letter", message: "Starting the month by telling you how much I care." },
    { emoji: "🍫", name: "Box of Chocolates", message: "Something sweet for my sweet." },
    { emoji: "☕", name: "Morning Coffee", message: "Warm hugs in a mug to start your day." },
    { emoji: "🧸", name: "Teddy Bear", message: "A little cuddle buddy just for you!" },
    { emoji: "🍓", name: "Chocolate Strawberries", message: "Your favorite aesthetic treat." },
    { emoji: "🌷", name: "Pink Tulips", message: "Because they match your pretty vibe." },
    { emoji: "🧁", name: "A Cute Cupcake", message: "Sprinkled with all my love." },
    { emoji: "💍", name: "Promise Ring", message: "A little sparkle for your day." },
    { emoji: "🍿", name: "Movie Date", message: "Get ready, we are watching your favorite tonight!" },
    { emoji: "🍦", name: "Ice Cream", message: "Even when it's cold, you melt my heart." },
    { emoji: "🎀", name: "Cute Hairbow", message: "To tie everything together perfectly." },
    { emoji: "📸", name: "Polaroid Picture", message: "Making memories with you is my favorite." },
    { emoji: "🍩", name: "Sweet Donut", message: "I 'donut' know what I'd do without you." },
    { emoji: "🌹", name: "Valentine's Rose", message: "Happy Valentine's Day to my favorite person! ❤️" }
];

const btn = document.getElementById('reveal-btn');
const emojiDisp = document.getElementById('gift-emoji');
const nameDisp = document.getElementById('gift-name');
const msgDisp = document.getElementById('gift-message');
const dateDisp = document.getElementById('date-display');
const grid = document.getElementById('collection-grid');

// Get today's date (We will use the day of the month)
const today = new Date();
const currentDay = today.getDate(); // e.g., gets 13 if it's Feb 13

// Display today's date nicely
dateDisp.innerText = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

// Function to generate the Memory Box
function buildMemoryBox() {
    grid.innerHTML = ""; // Clear existing
    
    for (let i = 0; i < 14; i++) {
        const item = document.createElement('div');
        item.classList.add('grid-item');
        
        // If the day has passed or is today, show the emoji. If it's in the future, lock it.
        // Note: i is 0-indexed, so day 1 is index 0.
        if ((i + 1) <= currentDay) {
            item.innerText = gifts[i].emoji;
            item.title = gifts[i].name; // Shows name on hover
        } else {
            item.innerText = "🔒";
            item.classList.add('locked');
        }
        grid.appendChild(item);
    }
}

// Build the box when the page loads
buildMemoryBox();

// Reveal Button Logic
btn.addEventListener('click', () => {
    // Ensure we don't go past index 13 (Day 14)
    const index = Math.min(currentDay - 1, 13);
    const todaysGift = gifts[index];

    // Remove animation class briefly to reset it, then add it back to trigger the pop-in
    emojiDisp.classList.remove('pop-animation');
    void emojiDisp.offsetWidth; // This forces the browser to restart the animation
    emojiDisp.classList.add('pop-animation');

    // Update the UI with today's gift
    emojiDisp.innerText = todaysGift.emoji;
    nameDisp.innerText = todaysGift.name;
    msgDisp.innerText = todaysGift.message;
    
    // Update button
    btn.innerText = "See you tomorrow! ❤️";
    btn.style.opacity = "0.7";
    btn.disabled = true;
});
