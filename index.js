const navs = document.querySelector(".mobile-toggle")
const primaryNav = document.querySelector(".middle")
const hambs = document.querySelector(".hamburger")
const cerrado = document.querySelector(".close")

navs.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible');

    
    if (!primaryNav.toggleAttribute("data-visible")) {
        hambs.classList.add("watch")
        cerrado.classList.remove("watch")
        cerrado.classList.add("close")
        primaryNav.style.display = "none"
  
    }else{
        cerrado.classList.remove("close")
        cerrado.classList.add("watch")
        hambs.classList.remove("watch")
        hambs.classList.add("close")
        primaryNav.style.display = "block"
    }
})

const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: true,
    arrows: false,
    responsive: {
    650:{
        dots:false
    },
    768: {
      slidesToShow: 2,
      arrows: false,
      dots: false
    },
    960: {
      disable: false, // slider disabled 960px to 1279px
      arrows: false,
    },
    1280: {
      disable: false,
      slidesToShow: 3,
      dots: false // dots enabled 1280px and up
    }
  }
});