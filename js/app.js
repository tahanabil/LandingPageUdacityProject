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
// Build menu
function BuildMenu() {
  for (i of sections) {
    let menuItem = document.createElement('li');
    menuItem.innerHTML = `<a id="id_${i.id}" href="#${i.id}" 
    class="menu__link" onclick="fn_scroll(event,this)">${i.dataset.nav}</a>`;
    document.getElementById('navbar__list').appendChild(menuItem);
  }
}

// Scroll to section on link click
function fn_scroll(e, sender) {
  e.preventDefault();
  let trigger = document.getElementById(sender.id.replace('id_', ''));
  let dimintions = trigger.getBoundingClientRect();
  window.scrollTo(0, dimintions.top + window.scrollY);
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
