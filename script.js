const yesBtn = document.getElementById("yesMain");
const noBtn = document.getElementById("noMain");
const bubble = document.getElementById("bubble");
const song = document.getElementById("song");

const final = document.getElementById("final");
const container = document.querySelector(".container");

const noMessages = [
  "Really?",
  "Nice try 😏",
  "You sure?",
  "No escape!",
  "Try again!",
  "Aye guli kamre debo!"
];

let msgIndex = 0;

noBtn.addEventListener("click", () => {
  bubble.innerText = noMessages[msgIndex % noMessages.length];
  bubble.classList.remove("hidden");

  setTimeout(() => bubble.classList.add("hidden"), 1500);
  msgIndex++;

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  song.currentTime = 0;
  song.volume = 0.9;

  song.play().catch(err => {
    console.log("Audio blocked:", err);
  });

  container.classList.add("hidden");
  final.classList.remove("hidden");
});
