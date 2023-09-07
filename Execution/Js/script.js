let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = ()=>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    
};


var swiper = new Swiper(".review-slider",{
    loop:true,
    spaceBetween:20,
    autoHeight:true,
    grabCursor:true,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0:{
            slidesPreview: 1,
        },
        768:{
            slidesPreview:2,
        },
        1020:{
            slidesPreview:3,
        },
    },
});