// toggle icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}





// active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec=>{
        let top =  window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window,scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:100 
});

ScrollReveal().reveal('.about-content p,.heading',{origin:'top'});
ScrollReveal().reveal('home-content h3,.home-content p,.about-img, .home-img,.skill-content,.project-container,.contact form',{origin:'bottom'});
// ScrollReveal().reveal('.footer-icon,.home-content p,.home-content h3,.social-media,.about-content p',{origin:'right'});
ScrollReveal().reveal('.social-media,.home-content h1,.footer-text,.footer-icon',{origin:'left'});

// typejs

const type = new Typed('.multiple-text',{
    strings: ['Student','Frontend Developer','Engineer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
})