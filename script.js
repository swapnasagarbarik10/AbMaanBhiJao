const song=document.getElementById('song');

const screen1=document.getElementById('screen1');
const screen2=document.getElementById('screen2');
const final=document.getElementById('final');

const yesMain=document.getElementById('yesMain');
const noMain=document.getElementById('noMain');
const yesFinal=document.getElementById('yesFinal');
const noFinal=document.getElementById('noFinal');

const noTexts=['Na maanbo na','Really?','Nice try 😏','You sure?','No escape!','Try again!','Ab toh ha bolna hi parega'];
let i=0;

noMain.style.left='55%';noMain.style.top='55%';
noMain.addEventListener('mouseenter',()=>{
  noMain.innerText=noTexts[i%noTexts.length];i++;
  noMain.style.left=Math.random()*(window.innerWidth-120)+'px';
  noMain.style.top=Math.random()*(window.innerHeight-60)+'px';
});

yesMain.onclick=()=>{
  song.currentTime=0;
  song.volume=0.9;
  song.play();
  screen1.classList.add('hidden');
  screen2.classList.remove('hidden');
};

noFinal.onclick=()=>{
  noFinal.innerText=noTexts[i%noTexts.length];i++;
  noFinal.style.left=Math.random()*(window.innerWidth-120)+'px';
  noFinal.style.top=Math.random()*(window.innerHeight-60)+'px';
};

yesFinal.onclick=()=>{
  screen2.classList.add('hidden');
  final.classList.remove('hidden');
};