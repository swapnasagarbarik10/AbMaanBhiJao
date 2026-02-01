const yesBtn = document.getElementById("yesMain");
const noBtn = document.getElementById("noMain");
const song = document.getElementById("song");

const container = document.querySelector(".container");
const final = document.getElementById("final");

const noTexts = [
  "Na maanbo na",
  "Really?",
  "Nice try 😏",
  "You sure?",
  "No escape!",
  "Try again!",
  "Aye guli kamre debo!",
  "Ab toh ha bolna hi parega"
];

let index = 0;

noBtn.addEventListener("mouseover", () => {
  noBtn.innerText = noTexts[index % noTexts.length];
  index++;

  const pad = 80;
  const maxX = window.innerWidth - noBtn.offsetWidth - pad;
  const maxY = window.innerHeight - noBtn.offsetHeight - pad;

  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
});

yesBtn.addEventListener("click", () => {
  song.currentTime = 0;
  song.volume = 0.9;
  song.play().catch(()=>{});

  container.classList.add("hidden");
  final.classList.remove("hidden");
});
