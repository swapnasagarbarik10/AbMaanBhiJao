document.addEventListener("DOMContentLoaded", () => {

  const yesMain = document.getElementById("yesMain");
  const noMain = document.getElementById("noMain");
  const yesFinal = document.getElementById("yesFinal");
  const noFinal = document.getElementById("noFinal");
  const song = document.getElementById("song");

  const screen1 = document.getElementById("screen1");
  const screen2 = document.getElementById("screen2");
  const final = document.getElementById("final");

  if (!song || !yesMain) {
    console.error("Required elements not found");
    return;
  }

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

  function dodge(btn) {
    btn.innerText = noTexts[i % noTexts.length];
    i++;

    const padding = 20;
    const maxX = window.innerWidth - btn.offsetWidth - padding;
    const maxY = window.innerHeight - btn.offsetHeight - padding;

    const x = Math.random() * maxX + padding;
    const y = Math.random() * maxY + padding;

    btn.style.left = x + "px";
    btn.style.top = y + "px";
  }

  noMain.style.position = "fixed";
  noMain.style.left = "60%";
  noMain.style.top = "60%";

  noFinal.style.position = "fixed";
  noFinal.style.left = "60%";
  noFinal.style.top = "65%";

  noMain.addEventListener("mouseenter", () => dodge(noMain));
  noFinal.addEventListener("mouseenter", () => dodge(noFinal));

  yesMain.addEventListener("click", () => {
    song.currentTime = 0;
    song.volume = 1;

    song.play()
      .then(() => console.log("Music started"))
      .catch(err => console.error("Play failed:", err));

    screen1.classList.add("hidden");
    screen2.classList.remove("hidden");
  });

  yesFinal.addEventListener("click", () => {
    screen2.classList.add("hidden");
    noFinal.classList.add("hidden");
    final.classList.remove("hidden");
  });

});
