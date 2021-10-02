document.addEventListener('DOMContentLoaded', function () {
    menuToggle();
})


function menuToggle() {
    let menu_open = document.querySelector('.menu-open'),
        menu = document.querySelector('.nav-menu');

    menu_open.addEventListener('click', function () {
        menu.classList.add('show');
    })

    $(document).on('click', function (e) {
        if ( !( ($(e.target).parents('.nav-menu').length) || ($(e.target).hasClass('nav-link')) || ($(e.target).parents('.menu-open').length) || ($(e.target).hasClass('menu-open')) ) || $(e.target).parents('.menu-close').length ) {
            console.log('test');
            $('.nav-menu').removeClass('show');
        }
    })
}