const text = document.getElementById('text');
const buttons1 = document.getElementById('buttons1');
const buttons2 = document.getElementById('buttons2');
const angry = document.getElementById('angry');
const forgive = document.getElementById('forgive');
const no2 = document.getElementById('no2');
const yes2 = document.getElementById('yes2');
const card = document.getElementById('card');
const final = document.getElementById('final');
const song = document.getElementById('song');

const story = [
  "I know you are angry babe 😔",
  "I know I am not there next to you to hug you and slay your sadness away 😢",
  "People say — Ami toke Chand debo, Ami toke Tara debo — mananor jonno",
  "Look at all the stars in the background I have created just for you, my Gulguli ✨",
  "Ar koto rege thakbi baby?"
];

let i = 0;
function nextText(){
  text.innerHTML = story[i];
  i++;
  if(i < story.length){
    setTimeout(nextText, 3000);
  } else {
    buttons1.classList.remove('hidden');
  }
}
nextText();

angry.addEventListener('mouseenter',()=>{
  angry.style.transform = `translate(${Math.random()*160-80}px,${Math.random()*120-60}px)`;
});

forgive.onclick = ()=>{
  text.innerHTML = "Yeaaa! Baby maan gai ❤️🎉";
  buttons1.classList.add('hidden');
  setTimeout(()=>{
    text.innerHTML = "I don’t need every universe. Just this one. With you and only you in it.<br><br>Will you be my Valentine?";
    buttons2.classList.remove('hidden');
  },2500);
};

let noClicks = 0;
const noTexts = ["Why no?!","You kidding right?","Aye guli kamre debo!","Abar na?!"];

no2.onclick = ()=>{
  noClicks++;
  text.innerHTML = noTexts[noClicks % noTexts.length];
  if(noClicks >= 10){
    no2.innerText = "Ab toh ha bolna hi parega";
    no2.onmouseenter = ()=>{
      no2.style.transform = `translate(${Math.random()*300-150}px,${Math.random()*200-100}px)`;
    };
  }
};

yes2.onclick = ()=>{
  card.classList.add('hidden');
  final.classList.remove('hidden');
  song.play();
};