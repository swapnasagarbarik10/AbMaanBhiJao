document.addEventListener("DOMContentLoaded", () => {

  const yesMain = document.getElementById("yesMain");
  const noMain = document.getElementById("noMain");
  const yesFinal = document.getElementById("yesFinal");
  const noFinal = document.getElementById("noFinal");
  const song = document.getElementById("song");

  const screen1 = document.getElementById("screen1");
  const screen2 = document.getElementById("screen2");
  const finalScreen = document.getElementById("final");

  const noTexts = [
    "Na maanbo na",
    "Really?",
    "Nice try 😏",
    "You sure?",
    "No escape!",
    "Try again!",
    "Ab toh ha bolna hi parega"
  ];

  let i = 0;
  const padding = 30;

  function clamp(val, min, max) {
    return Math.max(min, Math.min(val, max));
  }

  function dodge(btn) {
    btn.innerText = noTexts[i % noTexts.length];
    i++;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const bw = btn.offsetWidth;
    const bh = btn.offsetHeight;

    let x = Math.random() * (vw - bw);
    let y = Math.random() * (vh - bh);

    x = clamp(x, padding, vw - bw - padding);
    y = clamp(y, padding, vh - bh - padding);

    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
  }

  function confettiHearts() {
    for (let i = 0; i < 40; i++) {
      const heart = document.createElement("div");
      heart.innerText = "❤️";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.top = "-20px";
      heart.style.fontSize = Math.random() * 20 + 16 + "px";
      heart.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 4000);
    }
  }

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes fall {
      to {
        transform: translateY(110vh);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  [noMain, noFinal].forEach(btn => {
    btn.style.position = "fixed";
    btn.style.left = "60%";
    btn.style.top = "60%";
  });

  noMain.addEventListener("mouseenter", () => dodge(noMain));
  noFinal.addEventListener("mouseenter", () => dodge(noFinal));

  yesMain.addEventListener("click", () => {
    song.currentTime = 0;
    song.volume = 1;
    song.play().catch(() => {});

    confettiHearts();

    screen1.classList.add("hidden");
    screen2.classList.remove("hidden");
  });

  yesFinal.addEventListener("click", () => {
    confettiHearts();
    screen2.classList.add("hidden");
    noFinal.classList.add("hidden");
    finalScreen.classList.remove("hidden");
  });

});
