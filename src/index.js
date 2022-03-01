import './style.css';
import populateMenu from './menu.js';
import populateAbout from './about.js';
import populateContact from './contact.js';
import PizzaLogo from './pizza-outline.png';

console.log("Hello world!")

const content = document.querySelector('#content');

// create header
const header = document.createElement('div');
header.classList.add('header');
const logo = new Image();
logo.src = PizzaLogo;
logo.classList.add('logo');
const headerLinks = document.createElement('div');
headerLinks.classList.add('header-links');
const homeTab = document.createElement('div');
homeTab.classList.add('header-item');
homeTab.classList.add('highlighted');
homeTab.textContent = "HOME";
const menuTab = document.createElement('div');
menuTab.classList.add('header-item');
menuTab.textContent = "MENU";
const aboutTab = document.createElement('div');
aboutTab.classList.add('header-item');
aboutTab.textContent = "ABOUT";
const contactTab = document.createElement('div');
contactTab.classList.add('header-item');
contactTab.textContent = "CONTACT";

// add event listeners to header items
logo.addEventListener('click', () => {
    unhighlightTabs();
    homeTab.classList.add('highlighted');
    clearMain();
    populateHome();
})
homeTab.addEventListener('click', () => {
    unhighlightTabs();
    homeTab.classList.add('highlighted');
    clearMain();
    populateHome();
})
menuTab.addEventListener('click', () => {
    unhighlightTabs();
    menuTab.classList.add('highlighted');
    clearMain();
    populateMenu();
})
aboutTab.addEventListener('click', () => {
    unhighlightTabs();
    aboutTab.classList.add('highlighted');
    clearMain();
    populateAbout();
})
contactTab.addEventListener('click', () => {
    unhighlightTabs();
    contactTab.classList.add('highlighted');
    clearMain();
    populateContact();
})

// append header items to header, append header to content
header.appendChild(logo);
headerLinks.appendChild(homeTab);
headerLinks.appendChild(menuTab);
headerLinks.appendChild(aboutTab);
headerLinks.appendChild(contactTab);
header.appendChild(headerLinks);
content.appendChild(header);

// add main home content
const main = document.createElement('div');
main.classList.add('main');
content.appendChild(main);

populateHome();

function populateHome() {
    const bigLogo1 = document.createElement('div');
    bigLogo1.classList.add('big-logo-1')
    bigLogo1.textContent = 'Alfredo\'s'
    const bigLogo2 = document.createElement('div');
    bigLogo2.classList.add('big-logo-2')
    bigLogo2.textContent = 'PIZZA'

    main.appendChild(bigLogo1);
    main.appendChild(bigLogo2);
}

// clears main content
function clearMain() {
    const main = document.querySelector('.main');
    while (main.firstChild) {
        main.removeChild(main.lastChild);
    }
}

function unhighlightTabs() {
    homeTab.classList.remove('highlighted');
    menuTab.classList.remove('highlighted');
    aboutTab.classList.remove('highlighted');
    contactTab.classList.remove('highlighted');
}