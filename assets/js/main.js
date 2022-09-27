$(document).ready(function () {
    swiperSlider();
});


function swiperSlider() {
    let swiperContainer = '.swiper';
    let swiperOptions = {
        loop: true,
        centeredSlides: true,
        spaceBetween: 30,
    };
    const swiper = new Swiper(swiperContainer, swiperOptions);
}