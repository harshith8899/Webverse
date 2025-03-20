document.addEventListener('DOMContentLoaded', () => {
    const strikeThrough = document.querySelector('.strike-through');
    const rotateText = document.querySelector('.rotate-text');

    // Wait for the typewriter effect to finish (3 seconds) before starting the new animation
    setTimeout(() => {
        strikeThrough.classList.add('active');

        setTimeout(() => {
            rotateText.classList.add('active');
            setTimeout(() => {
                rotateText.textContent = 'Start';
            }, 250);
        }, 1000);

        setTimeout(() => {
            strikeThrough.classList.add('fade-out');
        }, 1250);
    }, 4000);
});

gsap.registerPlugin(ScrollTrigger);

// Fade in the logo on page load
gsap.fromTo('.main', {
    opacity: 0,
    yPercent: 50
}, {
    yPercent: -50,
    opacity: 1,
    duration: 1,
    ease: 'power3.out'
});

// Logo to header animation on scroll
let logoTl = gsap.timeline({
    scrollTrigger: {
        trigger: document.body,
        start: 0,
        end: () => window.innerHeight * 1.2,
        scrub: 0.6
    }
});

logoTl.fromTo('.main', {
    top: '50vh',
    yPercent: -50,
    scale: 4,
    textShadow: '0 0 2px rgba(0,0,0,0.3)'
}, {
    top: 0,
    yPercent: 0,
    scale: 1,
    textShadow: '0 0 2px rgba(0,0,0,0)',
    duration: 0.8
});

// Toggle the burger menu visibility
logoTl.fromTo('.menu', {
    opacity: 0
}, {
    opacity: 1,
    duration: 0.1
}, 0.9);

// Toggle the header box-shadow on scroll
logoTl.fromTo('header', {
    boxShadow: '0px 0px 10px rgba(0,0,0,0)',
}, {
    boxShadow: '0px 0px 10px rgba(0,0,0,.15)',
    duration: 0.2
}, 0.8);
