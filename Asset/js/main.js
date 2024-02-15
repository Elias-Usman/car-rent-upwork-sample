const 
    formOpenBtn = document.querySelector("#form-open"),
    home = document.querySelector(".home"),
    formContainer = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form_close"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw_hide");

    formOpenBtn.addEventListener("click", () => home.classList.add("show"));
    formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

    signupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        formContainer.classList.add("active");
    })
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        formContainer.classList.remove("active");
    })

    // Mobile form
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => 
{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 1500,
    delay: 100,
})
sr.reveal('.text',{delay: 100, origin: 'top'})
sr.reveal('.form-container form',{delay: 100, origin: 'left'})
sr.reveal('.heading',{delay: 100, origin: 'top'})
sr.reveal('.ride-container .box',{delay: 100, origin: 'top'})
sr.reveal('.services-container .box',{delay: 100, origin: 'top'})
sr.reveal('.about-container',{delay: 100, origin: 'top'})
sr.reveal('.reviews-container',{delay: 100, origin: 'top'})
sr.reveal('.newsletter',{delay: 100, origin: 'top'})