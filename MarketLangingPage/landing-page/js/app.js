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
 * Define Global Variables
 * 
 */

const navbarList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
function isInViewport(elem) {
    const el = elem.getBoundingClientRect();
    return (
        el.top >= 0 &&
        // el.top <= 10 &&
        el.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function buildNav(sections) {
    const fragment = document.createDocumentFragment();
    sections.forEach(section => {
        const liSection = document.createElement('li');
        liSection.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
        fragment.appendChild(liSection);
    });
    navbarList.append(fragment);
}


// Scroll to anchor ID using scrollTO event
function scrollToElement(elem) {
    const rect = elem.getBoundingClientRect();
    const top = rect.top + window.pageYOffset;
    window.scrollTo({
        top,
        left: 0,
        behavior: 'smooth'
    })
}

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click
function scrollToSection(e) {
    e.preventDefault();
    const currentEle = document.querySelector(e.target.hash);
    scrollToElement(currentEle);
}



function setSections() {
    sections.forEach(section => {
        isInViewport(section) ? section.classList.add('your-active-class') : section.classList.remove('your-active-class');
    })
}

document.addEventListener('DOMContentLoaded', function () {
    // Build menu
    buildNav(sections);

    // Scroll to section on link click
    navbarList.addEventListener('click', scrollToSection);

    // Set sections as active
    window.addEventListener('scroll', setSections);
})