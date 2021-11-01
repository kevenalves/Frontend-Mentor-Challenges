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