document.querySelector('.menu-opener').addEventListener('click', () =>{
  let nav = document.querySelector('nav');
  nav.classList.toggle('opened');
})

const toggleSlider = () =>{
  const slides = document.querySelectorAll('input[name=slider]');
  if(slides.length === 0) return;

  let current = document.querySelector('input[name=slider]:checked');
  if(!current){
    current = document.querySelector('input[name=slider]');
    current.setAttribute('checked', true);
  }

  let id = parseInt(current.getAttribute('id').split('-')[1]);
  if(id + 1 <= slides.length){
    id++;
  }else{
    id = 1;
  }
  
  for(let slider of slides) slider.removeAttribute('checked');
  document.querySelector(`#slider-${id}`).setAttribute('checked', true)
}

setInterval(toggleSlider, 5000);

function avatarMotion(){
  $('.js-tilt').tilt({
    glare: true,
    maxGlare: .5
})
}
avatarMotion()

function timeL(){
  document.addEventListener('DOMContentLoaded', () =>{
    let tl = new TimelineMax();

    tl.fromTo('.bg-loader', 1, {width: '100%'}, 
     { width: '0%',delay: 3, ease: Expo.easeInOut})

     .fromTo('.logo', 1, {y: -70, opacity: 0}, 
      {y: 0, opacity: 1,ease: Expo.easeInOut}, "-=0.5")

      .fromTo('header .button', 1, {y: -70, opacity: 0}, 
        {y: 0, opacity: 1,ease: Expo.easeInOut}, "-=0.5")
  })
}

timeL()

AOS.init();


setTimeout(() => {
 
let html = document.querySelector('html')
  html.classList.remove("hidden");
}, 4000);
