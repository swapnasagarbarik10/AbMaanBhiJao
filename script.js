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

  // 🔒 HARD SAFE ZONE (viewport margin)
  const SAFE_MARGIN = 60;

  function getSafePosition(btn) {
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;

    const bw = btn.offsetWidth;
    const bh = btn.offsetHeight;

    const minX = SAFE_MARGIN;
    const minY = SAFE_MARGIN;
    const maxX = vw - bw - SAFE_MARGIN;
    const maxY = vh - bh - SAFE_MARGIN;

    return {
      x: Math.random() * (maxX - minX) + minX,
      y: Math.random() * (maxY - minY) + minY
    };
  }

  function dodge(btn) {
    btn.innerText = noTexts[i % noTexts.length];
    i++;

    const pos = getSafePosition(btn);
    btn.style.left = pos.x + "px";
    btn.style.top = pos.y + "px";
  }

  // Force correct positioning context
  [noMain, noFinal].forEach(btn => {
    btn.style.position = "fixed";
    btn.style.left = "60%";
    btn.style.top = "60%";
    btn.style.maxWidth = "200px";
  });

  // Dodge ONLY inside safe zone
  noMain.addEventListener("mouseenter", () => dodge(noMain));
  noFinal.addEventListener("mouseenter", () => dodge(noFinal));

  yesMain.addEventListener("click", () => {
    song.currentTime = 0;
    song.volume = 1;
    song.play().catch(() => {});

    screen1.classList.add("hidden");
    screen2.classList.remove("hidden");
  });

  yesFinal.addEventListener("click", () => {
    screen2.classList.add("hidden");
    noFinal.classList.add("hidden");
    finalScreen.classList.remove("hidden");
  });

});
