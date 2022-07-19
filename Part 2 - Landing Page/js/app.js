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
const anchors = document.querySelectorAll('.menu__link');
for (let i = 0; i < anchors.length; i++) {
    function scroll(e) {
        e.preventDefault();
        window.scrollTo({ top: sections[i].offsetTop, left: 0, behavior: 'smooth' });
    }
    anchors[i].addEventListener('click', scroll);
}

// make section active on scroll
for (let i = 0; i < sections.length; i++) {
        function handleActive() {
        const bound = sections[i].getBoundingClientRect();
        if (bound.top <= 0 && bound.bottom >= 0) {
        sections[i].classList.add('your-active-class');
        } else {
        sections[i].classList.remove('your-active-class');
        };
    };    
    window.addEventListener('scroll', handleActive);
}
