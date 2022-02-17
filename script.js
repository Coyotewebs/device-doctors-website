

const slider = document.querySelector(".about-us__slider")
const nextBtn = document.querySelector(".next-btn")
const prevBtn = document.querySelector(".prev-btn")
const slides  = document.querySelectorAll(".about-us__slide")
const slideIcons = document.querySelectorAll(".slide-icon")
const numberOfSlides = slides.length
var slideNumber = 0 


// Start of dynamic copyright 
const yearSpan = document.querySelector('#currentYear')
const currentYear = new Date();
yearSpan.innerText = currentYear.getFullYear()
// End of dynamic copyright 


// Toggle menu icons
// const menu = document.querySelector(".menu")
// const navContents = document.querySelector("#nav_contents")

// menu.addEventListener("click", () => {
//   navContents.classList.toggle("toggle")
// })

//new

const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

      //show
toggleMenu.addEventListener('click', ()=> {
  navMenu.classList.toggle('show')
})

//hidden

closeMenu.addEventListener('click', ()=>{
  navMenu.classList.remove('show')
})

//active 
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  navLink.forEach(n=> n.classList.remove('active'))
  this.classList.add('active')

  // Remove menu mobile
  navMenu.classList.remove('show')

}



navLink.forEach(n => n.addEventListener('click',linkAction ))












//old
//Start of toggleBox
// function showMenu(){
//   document.querySelector('.navigation').classList.toggle('active')
//   document.querySelector('.menu').classList.toggle('hide')
//   document.querySelector('.close').classList.toggle('show')
// }

//End toggleBox


//image slider next button

nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove('active')
  })

  slideNumber++

  if(slideNumber > (numberOfSlides - 1)) {
    slideNumber = 0
  }
  
  slides[slideNumber].classList.add("active")
  slideIcons[slideNumber].classList.add("active")
})

//image slider previous button


prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove('active')
  })

  slideNumber--;

  if(slideNumber < 0) {
    slideNumber = numberOfSlides - 1;
  }
  
  slides[slideNumber].classList.add("active")
  slideIcons[slideNumber].classList.add("active")
})

//image slider autoplay

var playSlider;

var repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
      slide.classList.remove('active')
    })
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove('active')
    })
  
    slideNumber++
  
    if(slideNumber > (numberOfSlides - 1)) {
      slideNumber = 0
    }
    
    slides[slideNumber].classList.add("active")
    slideIcons[slideNumber].classList.add("active")

  }, 5000);
}
repeater();

//stop the image slider autoplay on mouseover 

slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
})

//start the image slider autoplay again on mouseout

slider.addEventListener("mouseout", () => {
  repeater();
})



