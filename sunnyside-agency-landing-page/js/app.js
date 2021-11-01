//Menu Mobile

let menu = document.querySelector('.center');
let menuMobile = document.querySelector('.menu-mobile')

menu.onclick = () =>{

    menu.classList.toggle('active');

    if(menu.classList.contains('active')){
        menuMobile.classList.add('animate__slideInDown');
        menuMobile.classList.remove('animate__slideOutUp');

        
    }else{
        menuMobile.classList.add('animate__slideOutUp');
        menuMobile.classList.remove('animate__slideInDown');

    }

}

// Scroll Suave

const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to - 30,
        behavior: "smooth",
    });
}

// animacao
  
  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';
  
  function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    })
  }
  
  animeScroll();
  
  if(target.length) {
      window.addEventListener('scroll', function() {
          animeScroll();
      })
  }