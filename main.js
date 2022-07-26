const menuEmail = document.querySelector('.navbar-email');
const destopMenu = document.querySelector('.desktop-menu');

const burguerMenu = document.querySelector('.burguerMenu');
const mobileMenu = document.querySelector('.mobile-menu');

const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');





menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleAside);


function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');


    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    destopMenu.classList.toggle('inactive');
}

function toggleAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopClosed = destopMenu.classList.contains('inactive');

    if (!isDesktopClosed) {
        destopMenu.classList.add('inactive');
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');

}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

}

