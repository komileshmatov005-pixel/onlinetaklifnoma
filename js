let target = new Date("Sep 15, 2026 19:00:00").getTime();

setInterval(() => {
  let now = new Date().getTime();
  let diff = target - now;

  let d = Math.floor(diff/(1000*60*60*24));
  let h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
  let m = Math.floor((diff%(1000*60*60))/(1000*60));
  let s = Math.floor((diff%(1000*60))/1000);

  document.getElementById("timer").innerHTML =
    d+" kun "+h+" soat "+m+" min "+s+" sek";
},1000);

function playMusic(){
  let audio = document.getElementById("audio");
  audio.paused ? audio.play() : audio.pause();
}