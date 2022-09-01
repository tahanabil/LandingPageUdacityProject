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
 * Define Global Variables
 *
 */

const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
//////////////////////////
//Function section ...
//////////////////////////

// Build menu
function BuildMenu() {
  for (i of sections) {
    let menuItem = document.createElement('li');
    let atag = document.createElement('a');
    atag.setAttribute('href', '#' + i.id);
    atag.setAttribute('id', 'id_' + i.id);
    atag.innerText = i.dataset.nav;
    atag.classList.add('menu__link');
    atag.addEventListener('click', function (e) {
      e.preventDefault();
      fn_scroll(event, this);
    });
    menuItem.appendChild(atag);

    document.getElementById('navbar__list').appendChild(menuItem);
  }
}

// Scroll to section on link click
function fn_scroll(e, sender) {
  e.preventDefault();
  let trigger = document.getElementById(sender.id.replace('id_', ''));
  trigger.scrollIntoView({ behavior: 'smooth' });
}
//start build menu
BuildMenu();

//add event listner
window.addEventListener('scroll', function () {
  sections.forEach((section) => {
    const box = section.getBoundingClientRect();
    if (box.top <= 200 && box.bottom >= 201) {
      section.classList.add('your-active-class');
      document.getElementById(`id_${section.id}`).classList.add('active');
    } else {
      section.classList.remove('your-active-class');
      document.getElementById(`id_${section.id}`).classList.remove('active');
    }
  });
});
