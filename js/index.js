//ANIMATIONS
const headingAnimation = document.querySelector("h1");
headingAnimation.classList.add('animate__animated', 'animate__fadeIn');
headingAnimation.style.setProperty('--animate-duration', '2s');

const moreDetailsAnimation = document.querySelector("img");
moreDetailsAnimation.classList.add('animate__animated', 'animate__bounceInLeft');

const moreDetailsAnimationText = document.querySelector("h2");
moreDetailsAnimationText.classList.add('animate__animated', 'animate__bounceInLeft');

const readButtonOpen = document.getElementById("readBtn");
readButtonOpen.addEventListener("click", () =>{
    readButtonOpen.classList.add("animate__animated", "animate__bounce");
    console.log("UwU its working");
})

//MODAL FUNCTIONALITY
const modalButton = document.querySelector("img");
const modalClose = document.querySelector("button");

modalButton.addEventListener("click", () => {
    let modalOpen = document.getElementById("windower");
    if(modalOpen){
       modalOpen.classList.add("active");
    }
    console.log("Should be Opening");
})

modalClose.addEventListener("click", () => {
    let modalClosing = document.getElementById("windower");
    if(modalClosing){
        modalClosing.classList.remove("active");
    }
    console.log("Should be closing");
})