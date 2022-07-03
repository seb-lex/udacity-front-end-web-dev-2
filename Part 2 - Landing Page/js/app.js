// Define Global Variables
const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

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

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
