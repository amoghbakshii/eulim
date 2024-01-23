ScrollReveal().reveal('.logo-main', { delay: 200, origin: 'top' });
ScrollReveal().reveal('a', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.body-main', { delay:200, origin: 'top' });
ScrollReveal().reveal('.navbar', { delay:300, origin: 'top' });
ScrollReveal().reveal('.footer', { delay:300, origin: 'top' });

function typeWriter(){
    var typed = new Typed(".auto-type",{
        strings:["Simplify It.","RecyclifyIt."],
        typeSpeed:150,
        backSpeed:250,
        loop:true,
        delay:5000
    })
}
typeWriter();

