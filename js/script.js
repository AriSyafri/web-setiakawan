// toggle class active hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');

};

// klik diluar sidebar untuk menghilangkan nav hamburger menu
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

});




// toggle class active search menu
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');


// ketika search menu di klik
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();

};

// klik diluar elemen untuk menghilangkan nav search menu
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e){
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }

});

// bagian klik untuk shopping cart
const cart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart').onclick = () => {
    cart.classList.toggle('active');
};

// bagian untuk menghilangkan shopping cart
const sc = document.querySelector('#shopping-cart');
document.addEventListener('click', function(e){

    if(!sc.contains(e.target) && !cart.contains(e.target)) {
        cart.classList.remove('active');
    }

});

// modal box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {

    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
});



// klik tombol close modalbox
const closeIcon = document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
}

window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
};