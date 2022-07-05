/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navMenu = () => {
    let navList = '';

    sections.forEach(section => {
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;
        navList += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
    });
    navigation.innerHTML = navList;
};
navMenu();

// make section active on scroll
const sect1 = document.querySelector('#section1');
const sect2 = document.querySelector('#section2');
const sect3 = document.querySelector('#section3');

window.addEventListener('scroll', () => {
    const bound = sect1.getBoundingClientRect();
if (bound.top <= 0 && bound.bottom >= 0) {
    sect1.classList.add('your-active-class');
} else {
    sect1.classList.remove('your-active-class');
};
})

window.addEventListener('scroll', () => {
    const bound = sect2.getBoundingClientRect();
if (bound.top <= 0 && bound.bottom >= 0) {
    sect2.classList.add('your-active-class');
} else {
    sect2.classList.remove('your-active-class');
};
})

window.addEventListener('scroll', () => {
    const bound = sect3.getBoundingClientRect();
if (bound.top <= 0 && bound.bottom >= 0) {
    sect3.classList.add('your-active-class');
} else {
    sect3.classList.remove('your-active-class');
};
})





// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
