const heartImg = document.getElementById("heart-img");
const splashScreen = document.getElementById("splash-screen");
const splashContainer = document.getElementById("splash-container")
let scaleNum = 1.5;
const birthdayText = document.getElementById("birthday-text")
const images = document.querySelectorAll(".images");
function pressHeart() {
  if (scaleNum <= 5) {
    heartImg.style.transform = `scale(${scaleNum},${scaleNum})`;
    scaleNum += 0.5;
    console.log(scaleNum);
  } else {
    heartImg.style.display = "none"
    splashScreen.style.animationPlayState = "running"
    birthdayText.style.animationPlayState = "running";
    splashContainer.style.visibility = "visible"
  }
}

function moveBallons() {
  splashScreen.style.animationName = "ballons"
  splashScreen.style.animationDuration = "3s"
  splashScreen.style.animationDelay = "3s"
  splashScreen.style.animationPlayState = "running";
  splashScreen.style.animationFillMode = "forwards";
  for (i of images){
    console.log(i);
    i.style.animationPlayState = "running";
  }
  
  
}
heartImg.addEventListener("click", pressHeart);
splashScreen.addEventListener("animationend",moveBallons)
