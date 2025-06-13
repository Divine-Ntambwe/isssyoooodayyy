const heartImg = document.getElementById("heart-img");
const splashScreen = document.getElementById("splash-screen");
const splashContainer = document.getElementById("splash-container")
let scaleNum = 1.5;
const birthdayText = document.getElementById("birthday-text")
const images = document.querySelectorAll(".images");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");
const img8 = document.getElementById("img8");
const img9 = document.getElementById("img9");
const imgGallery = document.getElementById("images")

function pressHeart() {
  if (scaleNum <= 3) {
    heartImg.style.transform = `scale(${scaleNum},${scaleNum})`;
    scaleNum += 0.5;
    console.log(scaleNum);
  } else {
    heartImg.style.display = "none"
    splashScreen.style.animationPlayState = "running"
    birthdayText.style.animationPlayState = "running";
    splashContainer.style.visibility = "visible"
    document.getElementById("body").style.backgroundColor = "black";
  }
}

function moveBallons() {
  splashScreen.style.animationName = "ballons"
  splashScreen.style.animationDuration = "3s"
  splashScreen.style.animationDelay = "3s"
  splashScreen.style.animationPlayState = "running";
  splashScreen.style.animationFillMode = "forwards";
 
  for (i of images){
    i.style.animationPlayState = "running";
    i.addEventListener("animationend",()=>{
    imgGallery.style.zIndex = "10"
    imgGallery.style.pointerEvents = "all"
    splashScreen.style.display = "none";
    i.style.visibility = "visible"
    i.style.zIndex = "10";
    splashContainer.style.zIndex = "10"
    console.log(imgGallery)
    });
  }

  
 
  
}
heartImg.addEventListener("click", pressHeart);
splashScreen.addEventListener("animationend",moveBallons);


let bigImage;
img1.addEventListener("mouseover",() => {
  img1.setAttribute("src",`images\\WhatsApp Image 2025-06-10 at 13.14.10_52b0708b.jpg`);
  img1.style.transform = "rotate(180deg)"
})

img1.addEventListener("mouseout",() => {
  img1.setAttribute("src",`images/WhatsApp Image 2025-06-07 at 21.24.42_d59ba3be.jpg`);
  img1.style.transform = "rotate(360deg)"
})


img6.addEventListener("mouseover",() => {
  img6.setAttribute("src",`images\\WhatsApp Image 2025-06-10 at 13.13.53_d2b13066.jpg`);

})

img6.addEventListener("mouseout",() => {
  img6.setAttribute("src","images/WhatsApp Image 2025-06-07 at 21.24.41_3e25d98d.jpg");

})

img4.addEventListener("click",() => {
  bigImage = document.querySelector(".big-image");
  bigImage.classList.remove("big-image");
  img4.classList.add("big-image")

})

img5.addEventListener("click",() => {
  bigImage = document.querySelector(".big-image");
  bigImage.classList.remove("big-image");
  img5.classList.add("big-image")

})

img2.addEventListener("click",() => {
  bigImage = document.querySelector(".big-image");
  bigImage.classList.remove("big-image");
  img2.classList.add("big-image")
  

})

img3.addEventListener("click",() => {
  bigImage = document.querySelector(".big-image");
  bigImage.classList.remove("big-image");
  img3.classList.add("big-image")
  

})

img7.addEventListener("click",() => {
  bigImage = document.querySelector(".big-image");
  bigImage.classList.remove("big-image");
  img7.classList.add("big-image")
  

})

img8.addEventListener("click",() => {
  bigImage = document.querySelector(".big-image");
  bigImage.classList.remove("big-image");
  img8.classList.add("big-image")
  

})

img9.addEventListener("click",() => {
  bigImage = document.querySelector(".big-image");
  bigImage.classList.remove("big-image");
  img9.classList.add("big-image")
  

})

