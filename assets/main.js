/* =====SHOW MENU===== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    //Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        });
    }
}
showMenu('nav-toggle', 'nav-menu')



/* =====REMOVE MENU MOBILE===== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/* =====Scroll Sections Active Link===== */
const section = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset
    section.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    });
}

/* =====Show Scroll Top===== */
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 200) {
        scrollTop.classList.add('show-scroll')
    } else {
        scrollTop.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollTop)

/* =====DARK THEME===== */
var themeButton = document.getElementById('theme-button');
const darkIcon = "assets/images/bx-sun.svg";
const lightIcon = "assets/images/bx-moon.svg";
//previously selected topic
const selectedTheme = localStorage.getItem('selected-theme');
//obtain the current theme
const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
//validate if the user previously chose a topic
if (selectedTheme) {
    if (selectedTheme === 'dark-theme') {
        document.body.classList.add('dark-theme');
        themeButton.src = darkIcon;
    } else {
        document.body.classList.remove('dark-theme');
        themeButton.src = lightIcon;
    }
}
//activate theme with button
themeButton.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
        themeButton.src = lightIcon;
    } else {
        themeButton.src = darkIcon;
    }
    //add or remove the dark theme
    document.body.classList.toggle('dark-theme');
    //save the theme
    localStorage.setItem('selected-theme', getCurrentTheme());
})