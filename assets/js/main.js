/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navOpenline = document.getElementById('nav-openline'),
      navClose = document.getElementById('nav-close')

if(navOpenline){
    navOpenline.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== SWIPER HOMES ===============*/
const swiperHome = new Swiper('.home__swiper', {

    loop: true,
    // Efecto diapositiva
    speed: 800,
    parallax: true,
    effect: 'fade',
  
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',   // Nunero de la pagina
        // Formatos en fraccion
      formatFractionCurrent: (number) => { return '0' + number },
      formatFractionTotal: (number) => { return '0' + number }
    },
  
    // Flechas de navegación
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})