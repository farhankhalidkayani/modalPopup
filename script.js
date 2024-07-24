let openButton=document.querySelector("[data-modal-target]");
let closeButton = document.querySelector('[data-modal-close]');
let modal=document.querySelector("#modal");
let overlay=document.querySelector("#overlay");

openButton.addEventListener("click",()=>{
    modal.classList.add("active");
    overlay.classList.add("active");
})
closeButton.addEventListener("click",()=>{
    modal.classList.remove("active");
    overlay.classList.remove("active");
})
overlay.addEventListener("click",()=>{
    modal.classList.remove("active");
    overlay.classList.remove("active");
})