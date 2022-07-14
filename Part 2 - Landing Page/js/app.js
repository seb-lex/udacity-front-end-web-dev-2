/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
*/

const ul = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

// build nav links
const links = [
    { id: '#section1', text: 'Section 1'},
    { id: '#section2', text: 'Section 2'},
    { id: '#section3', text: 'Section 3'},   
];

ul.innerHTML = links.map(link => `<li><a class="menu__link" href=${link.id}>${link.text}</a></li>`); 

// build nav
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


// Scroll to anchor ID using scrollTO event
const anchor = document.querySelectorAll('.menu__link');
const anchor1 = anchor[0];
const anchor2 = anchor[1];
const anchor3 = anchor[2];

function scrollToFunction1(e) {
    e.preventDefault();
    const sectionById = document.querySelector('#section1');
    window.scrollTo({ top: sectionById.offsetTop, left: 0, behavior: 'smooth' });
};
anchor1.addEventListener('click', scrollToFunction1); 

function scrollToFunction2(e) {
    e.preventDefault();
    const sectionById = document.querySelector('#section2');
    window.scrollTo({ top: sectionById.offsetTop, left: 0, behavior: 'smooth' });
};
anchor2.addEventListener('click', scrollToFunction2); 

function scrollToFunction3(e) {
    e.preventDefault();
    const sectionById = document.querySelector('#section3');
    window.scrollTo({ top: sectionById.offsetTop, left: 0, behavior: 'smooth' });
};
anchor3.addEventListener('click', scrollToFunction3); 

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
