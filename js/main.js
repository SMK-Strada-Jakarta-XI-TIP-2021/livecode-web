// bahan scroll animation
const sections = document.querySelectorAll('section');
const nav = document.querySelectorAll('nav ul li');

// bahan slides

let slides=document.querySelector('.slider-items').children;
let nextSlide=document.querySelector('.right-slide');
let prevSlide=document.querySelector('.left-slide');
let totalSlides=slides.length;
let index=0;

// scroll animation
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        if (pageYOffset > (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })
  
    nav.forEach(li => {
        li.classList.remove('active');
  
        if (li.classList.contains(current)) {
            li.classList.add('active');
        }
    })
})

// membuat slide
nextSlide.addEventListener('click', function () {
    next('next');
})

prevSlide.addEventListener('click', function () {
    next('prev');
})

function next(direction){

    if(direction=="next"){
     index++;
      if(index==totalSlides){
       index=0;
      }
    } else {
         if(index==0){
           index=totalSlides-1;
         } else{
           index--;
         }
    }

    for(i=0;i<slides.length;i++) {
         slides[i].classList.remove("active");
    }

    slides[index].classList.add("active");     

}