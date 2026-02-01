
document.addEventListener("DOMContentLoaded", () => {

  const noMain = document.getElementById("noMain");
  const noFinal = document.getElementById("noFinal");
  const yesMain = document.getElementById("yesMain");
  const yesFinal = document.getElementById("yesFinal");
  const song = document.getElementById("song");

  const screen1 = document.getElementById("screen1");
  const screen2 = document.getElementById("screen2");
  const finalScreen = document.getElementById("final");

  const noTexts = [
    "Na mane ta ki?",
    "Areee Abar?",
    "Na Bola Jabe Na😏",
    "Akhono Na?",
    "KAmre Debo!",
    "Sotti Jore Kamre Debo!",
    "Ha toh Bolte Hi Hobe"
  ];

  let i = 0;
  const PADDING = 16;

  function dodge(btn) {
    const parent = btn.parentElement;
    const parentRect = parent.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    const maxX = parentRect.width - btnRect.width - PADDING;
    const maxY = parentRect.height - btnRect.height - PADDING;

    const x = Math.random() * maxX + PADDING;
    const y = Math.random() * maxY + PADDING;

    btn.innerText = noTexts[i % noTexts.length];
    i++;

    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
  }

  function confettiHearts() {
    for (let i = 0; i < 35; i++) {
      const heart = document.createElement("div");
      heart.innerText = "❤️";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.top = "-20px";
      heart.style.fontSize = Math.random() * 20 + 16 + "px";
      heart.style.animation = "fall 3s linear forwards";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 3500);
    }
  }

  const style = document.createElement("style");
  style.innerHTML = `@keyframes fall { to { transform: translateY(110vh); opacity: 0; } }`;
  document.head.appendChild(style);

  noMain.addEventListener("mouseenter", () => dodge(noMain));
  noFinal.addEventListener("mouseenter", () => dodge(noFinal));

  yesMain.addEventListener("click", () => {
    song.currentTime = 0;
    song.play().catch(() => {});
    confettiHearts();
    screen1.classList.add("hidden");
    screen2.classList.remove("hidden");
  });

  yesFinal.addEventListener("click", () => {
    confettiHearts();
    screen2.classList.add("hidden");
    finalScreen.classList.remove("hidden");
  });

});
