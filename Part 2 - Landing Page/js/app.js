// Define Global Variables
const ul = document.querySelector('#navbar__list');

// build nav links
const links = [
    { id: '#section1', text: 'Section 1'},
    { id: '#section2', text: 'Section 2'},
    { id: '#section3', text: 'Section 3'},   
];

ul.innerHTML = links.map(link => link = `<li><a class="menu__link" href=${link.id}>${link.text}</a></li>`); 


// build the nav
// const navMenu = () => {
//     let navList = '';

//     sections.forEach(section => {
//         const sectionID = section.id;
//         const sectionDataNav = section.dataset.nav;
//         navList += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
//     });
//     navigation.innerHTML = navList;
// };
// navMenu();

// make section active on scroll
// window.addEventListener('scroll', () => {
//     const bound = sect1.getBoundingClientRect();
// if (bound.top <= 0 && bound.bottom >= 0) {
//     sect1.classList.add('your-active-class');
// } else {
//     sect1.classList.remove('your-active-class');
// };
// })

// window.addEventListener('scroll', () => {
//     const bound = sect2.getBoundingClientRect();
// if (bound.top <= 0 && bound.bottom >= 0) {
//     sect2.classList.add('your-active-class');
// } else {
//     sect2.classList.remove('your-active-class');
// };
// })

// window.addEventListener('scroll', () => {
//     const bound = sect3.getBoundingClientRect();
// if (bound.top <= 0 && bound.bottom >= 0) {
//     sect3.classList.add('your-active-class');
// } else {
//     sect3.classList.remove('your-active-class');
// };
// })


// Scroll to anchor ID using scrollTO event
