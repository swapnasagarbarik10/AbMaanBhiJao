// BUTTONS & ELEMENTS
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const song = document.getElementById("song");

const mainCard = document.getElementById("mainCard");
const finalCard = document.getElementById("finalCard");

// NO button text cycle
const noTexts = [
  "Na maanbo na",
  "Really?",
  "Nice try 😏",
  "You sure?",
  "No escape!",
  "Ab toh ha bolna hi parega"
];

let index = 0;

// Initial SAFE position
noBtn.style.left = "60%";
noBtn.style.top = "60%";

// NO button dodge logic
noBtn.addEventListener("mouseenter", () => {
  noBtn.innerText = noTexts[index % noTexts.length];
  index++;

  const padding = 20;
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth - padding;
  const maxY = window.innerHeight - btnHeight - padding;

  const minX = padding;
  const minY = padding;

  const x = Math.random() * (maxX - minX) + minX;
  const y = Math.random() * (maxY - minY) + minY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// YES button logic
yesBtn.addEventListener("click", () => {
  song.currentTime = 0;
  song.volume = 0.9;
  song.play().catch(() => {});

  mainCard.classList.add("hidden");
  finalCard.classList.remove("hidden");
});
