/**
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
 * @format
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

var sections = document.querySelectorAll('section');
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

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */
// Build menu
function BuildMenu() {
  var ul = document.getElementById('navbar__list');

  for (i of sections) {
    var menuItem = document.createElement('li');
    menuItem.innerHTML = `<a id="id_${i.id}" href="#${i.id}" class="menu__link">${i.dataset.nav}</a>`;
    document.getElementById('navbar__list').appendChild(menuItem);
  }
}

// Scroll to section on link click

// Set sections as active

BuildMenu();
//Start functions
window.addEventListener('scroll', function () {
  // console.log('scrolling');

  sections.forEach((section) => {
    const box = section.getBoundingClientRect();
    if (box.top <= 200 && box.bottom >= 201) {
      //   console.log('scrolling' + section.id, box.top);
      section.classList.add('your-active-class');
      document.getElementById(`id_${section.id}`).classList.add('active');
    } else {
      section.classList.remove('your-active-class');
      document.getElementById(`id_${section.id}`).classList.remove('active');
    }
  });
});
