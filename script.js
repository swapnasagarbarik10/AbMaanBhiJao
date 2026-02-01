const song=document.getElementById('song');

// HARD FIX: unlock audio on first user interaction (works on Chrome/Safari/Mobile)
function unlockAudio(){
  song.muted=false;
  song.volume=0.9;
  song.play().catch(()=>{});
  document.removeEventListener('pointerdown', unlockAudio);
}
document.addEventListener('pointerdown', unlockAudio);

const screen1=document.getElementById('screen1');
const screen2=document.getElementById('screen2');
const final=document.getElementById('final');

const yesMain=document.getElementById('yesMain');
const noMain=document.getElementById('noMain');
const yesFinal=document.getElementById('yesFinal');
const noFinal=document.getElementById('noFinal');

const noTexts=['Na maanbo na','Really?','Nice try 😏','You sure?','No escape!','Try again!','Ab toh ha bolna hi parega'];
let i=0;

function dodge(btn){
  btn.innerText=noTexts[i%noTexts.length];
  i++;
  const pad=80;
  const maxX=window.innerWidth-btn.offsetWidth-pad;
  const maxY=window.innerHeight-btn.offsetHeight-pad;
  btn.style.left=Math.max(20,Math.random()*maxX)+'px';
  btn.style.top=Math.max(20,Math.random()*maxY)+'px';
}

noMain.style.left='55%';noMain.style.top='55%';
noFinal.style.left='55%';noFinal.style.top='65%';

noMain.addEventListener('mouseenter',()=>dodge(noMain));
noFinal.addEventListener('mouseenter',()=>dodge(noFinal));

yesMain.onclick=()=>{
  song.currentTime=0;
  song.play().catch(()=>{});
  screen1.classList.add('hidden');
  screen2.classList.remove('hidden');
};

yesFinal.onclick=()=>{
  screen2.classList.add('hidden');
  noFinal.classList.add('hidden');
  final.classList.remove('hidden');
};