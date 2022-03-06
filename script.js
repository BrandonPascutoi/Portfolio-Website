// All elements related to hambuger menu and drop down menu:
const HamburgerMenu = document.querySelector('.hamburger-menu');
const topLine = document.querySelector('.top-line');
const middleLine = document.querySelector('.middle-line');
const bottomLine = document.querySelector('.bottom-line');
const dropDownMenu = document.querySelector('.drop-down-menu');
const dropDownMenuContents = document.querySelector('.drop-down-menu-contents');

// Determines the state of the hamburger menu, whether it is open or closed.
let menuOpen = false;

/* Creates the animation when clicking the hamburger menu icon. 
   1. It changes the opacity of the middle line to make it disappear or reappear.
   2. It rotates the top and bottom line from horizontal to diagonal depending on if the menu is open or not.
   3. The end result is a nice animation from 3 lines into an 'X' that looks very smooth and appealing.
   4. all changes are reversed when the menu button is clicked a second time. */
const hamburgerMenuAnimation = (topLine, middleLine, bottomLine) => {
    topLine.style.transition = 'all 0.1s linear';
    middleLine.style.transition = 'all 0.1s linear';
    bottomLine.style.transition = 'all 0.1s linear';
    dropDownMenu.style.transition = 'all 0.1s linear';
    dropDownMenuContents.style.transition = 'all 0.1s linear';
    if (menuOpen === false) {
        topLine.style.top = '42.5%'
        topLine.style.transform = 'rotate(45deg)'
        bottomLine.style.top = '-42.5%'
        bottomLine.style.transform = 'rotate(-45deg)'
        middleLine.style.opacity = '0%';
        dropDownMenu.style.top = '3.8rem';
        dropDownMenuContents.style.top = '0rem'
        menuOpen = true;
    } else if (menuOpen === true) {
        topLine.style.top = '0%'
        topLine.style.transform = 'rotate(0deg)'
        bottomLine.style.top = '0%'
        bottomLine.style.transform = 'rotate(0deg)'
        middleLine.style.opacity = '100%';
        dropDownMenu.style.top = '-12.45rem';
        dropDownMenuContents.style.top = '16.25rem'
        menuOpen = false;
    }
    
}

HamburgerMenu.addEventListener('click', function() {
    hamburgerMenuAnimation(topLine, middleLine, bottomLine);
})

let video = document.querySelector('.video');
video.playbackRate = 0.3;