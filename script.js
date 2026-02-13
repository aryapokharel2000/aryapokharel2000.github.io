const flowers = [
    { name: "Red Rose", emoji: "🌹", message: "A classic for a classic beauty." },
    { name: "Tulip", emoji: "🌷", message: "You make my world colorful!" },
    { name: "Cherry Blossom", emoji: "🌸", message: "Soft and sweet, just like you." },
    { name: "Sunflower", emoji: "🌻", message: "You are my sunshine." },
    { name: "White Lily", emoji: "🤍", message: "Pure love, just for you." }
];

const btn = document.getElementById('reveal-btn');
const emojiDisp = document.getElementById('flower-emoji');
const nameDisp = document.getElementById('flower-name');
const msgDisp = document.getElementById('flower-message');

btn.addEventListener('click', () => {
    // Get day of the month (1-31)
    const today = new Date().getDate();
    
    // Use modulo to loop through flowers array based on the date
    const flowerIndex = today % flowers.length;
    const todayFlower = flowers[flowerIndex];

    // Update the UI
    emojiDisp.innerText = todayFlower.emoji;
    nameDisp.innerText = todayFlower.name;
    msgDisp.innerText = todayFlower.message;
    
    // Aesthetic touch: change button text after clicking
    btn.innerText = "See you tomorrow! ❤️";
    btn.style.opacity = "0.7";
    btn.disabled = true;
});
