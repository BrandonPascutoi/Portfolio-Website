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

// Elements for tagline on introduction section of home page.
let tagline = document.querySelector('.tagline');
let firstTagline = 'Front End Developer';
let secondTagline = 'Self Taught';
let thirdTagline = 'Constant Learner';

let taglineWeAreCurrentlyOn = 1;

let incrementallyRemoveLastCharacter = () => {
    let i = 0;
    let loop = phrase => {
        setTimeout(() => {
            phrase.innerHTML = phrase.innerHTML.slice(0, -1);
            if (i < phrase.innerHTML.length) {
                loop(phrase);
            } else {
                incrementallyAddNextCharacter();
            }
        }, 0150)
    }
    loop(tagline); 
}

let incrementallyAddNextCharacter = () => {
    let i = 0;
    let loop = phrase => {
        setTimeout(() => {
            const rebuildPhrase = taglinePosition => {
                phrase.innerHTML += taglinePosition[i];
                if (i < taglinePosition.length - 1) {
                    i++;
                    loop(phrase);
                } else {
                    setTimeout(() => {
                        taglineWeAreCurrentlyOn++
                        if (taglineWeAreCurrentlyOn === 4) {
                            taglineWeAreCurrentlyOn = 1;
                        }
                        incrementallyRemoveLastCharacter()
                    }, 3000)
                }
            }
            if (taglineWeAreCurrentlyOn === 1) {
                rebuildPhrase(secondTagline)
            } else if (taglineWeAreCurrentlyOn === 2) {
                rebuildPhrase(thirdTagline)
            } else if (taglineWeAreCurrentlyOn === 3) {
                rebuildPhrase(firstTagline)
            } else {
                i = 1;
            }
        }, 0150);
    }
    loop(tagline);
}

let taglinePromise = new Promise((resolve, reject) => {
    if (tagline.innerHTML === firstTagline || tagline.innerHTML === secondTagline || tagline.innerHTML === ThirdTagline) {
        resolve('Passed!');
    } else if (tagline.innerHTML === '') {
        reject('Line is empty');
    };
});

taglinePromise.then(() => {
    setTimeout(() => {
        incrementallyRemoveLastCharacter();
    }, 2000)
}, () => {

});

const landscapeNavBar = document.querySelector('.landscape-navBar')

function getYPosition(){
    const top  = window.pageYOffset || document.documentElement.scrollTop
    return top;
}

const makeLandscapeNavbarTransparent = () => {
    landscapeNavBar.style.transition = 'all 0.1s linear';
    landscapeNavBar.style.backgroundColor = 'transparent'
    landscapeNavBar.style.boxShadow = '0 0 0 0 rgb(9 5 29 / 17%)'
}

(() => {
    setInterval(() => {
        if (getYPosition() > 20) {
            landscapeNavBar.style.transition = 'all 0.1s ease-in-out';
            landscapeNavBar.style.backgroundColor = '#1b1a2ea9'
            landscapeNavBar.style.boxShadow = '0 10px 10px 0 rgb(9 5 29 / 17%)'
        } else {
            landscapeNavBar.style.transition = 'all 0.1s ease-in-out';
            landscapeNavBar.style.backgroundColor = 'transparent'
            landscapeNavBar.style.boxShadow = '0 0 0 0 rgb(9 5 29 / 17%)'
        }
    }, 0050)
})();

// Elements related to nav bar properties:
const menuOptionContainer = document.querySelectorAll('.icon-container');
const barUnderMenuOptions = document.querySelectorAll('.bar')

// This determines what page the website is currently on.
const path = window.location.pathname;
const page = path.split("/").pop();

for (let i = 0; i < menuOptionContainer.length; i++) {
    menuOptionContainer[i].addEventListener('click', () => {
        for (let j = 0; j < menuOptionContainer.length; j++) {
            barUnderMenuOptions[j].style.transition = 'all 0.2s ease-in-out';
            barUnderMenuOptions[j].style.width = '0%';
        }
    })
}

// This makes purple bar appear under element depending on which page is selected.
window.addEventListener('load', () => {
    if (page == 'index.html') {
        barUnderMenuOptions[0].style.transition = 'all 0.2s ease-in-out';
        barUnderMenuOptions[0].style.width = '90%';
    } else if (page == 'about.html') {
        barUnderMenuOptions[1].style.transition = 'all 0.2s ease-in-out';
        barUnderMenuOptions[1].style.width = '90%';
    } else if (page == 'projects.html') {
        barUnderMenuOptions[2].style.transition = 'all 0.2s ease-in-out';
        barUnderMenuOptions[2].style.width = '90%';
    } else if (page == 'cv.html') {
        barUnderMenuOptions[3].style.transition = 'all 0.2s ease-in-out';
        barUnderMenuOptions[3].style.width = '90%';
    } 
})

// This makes source code button move up slightly on hover

const sourceCodeButton = document.querySelector('.source-icon-container')
sourceCodeButton.style.bottom = '0';

sourceCodeButton.addEventListener('mouseover', () => {
    sourceCodeButton.style.transition = 'all 0.2s ease-in-out';
    sourceCodeButton.style.position = 'relative';
    sourceCodeButton.style.bottom = '2%'
})

sourceCodeButton.addEventListener('mouseout', () => {
    sourceCodeButton.style.transition = 'all 0.1s ease-in-out';
    sourceCodeButton.style.position = 'relative';
    sourceCodeButton.style.bottom = '0'
})