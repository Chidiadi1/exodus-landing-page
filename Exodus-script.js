//DROP-DOWN MENU

let menuItems = document.querySelector('.nav-items');
let menuBar = document.querySelector('.nav-menu-btn');
let menuBar1 = document.querySelector('.nav-menu-btn i:nth-child(1)');
let menuBar2 = document.querySelector('.nav-menu-btn i:nth-child(2)');
let mn = document.querySelector('main');
let ft = document.querySelector('footer');

menuBar.addEventListener('click', function toggleMenu() {
    if(menuItems.style.display === 'none') {
        menuItems.style.display = 'block';
        menuBar2.style.display = 'block';
        menuBar1.style.display = 'none';
        mn.style.display = 'none';
        ft.style.display = 'none';
    } else {
        menuItems.style.display = 'none';
        menuBar2.style.display = 'none';
        menuBar1.style.display = 'block';
        mn.style.display = 'block';
        ft.style.display = 'block';
    }
});


//SCROLL ANIMATIONS

function revealItems () {
    let reveal = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveal.length; i++) {
        let curRevealItem = reveal[i]
        let elementDist = curRevealItem.getBoundingClientRect().top;
        let WinndowvH = window.innerHeight;
        let toRevealEl = 150;
        
        if (elementDist < WinndowvH - toRevealEl) {
            curRevealItem.classList.add('active')
        } else {
            curRevealItem.classList.remove('active')
        }   
    }
}
window.addEventListener('scroll', revealItems)