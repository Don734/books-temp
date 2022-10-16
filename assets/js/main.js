$(document).ready(function () {
    swiperSlider();
    productGallery();
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

function productGallery() {
    let swiperImgContainer = '.swiper-product-img';
    let swiperThumbContainer = '.swiper-product-thumbs';
    
    let swiperThumbOptions = {
        spaceBetween: 5,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    };
    const swiperProductThumb = new Swiper(swiperThumbContainer, swiperThumbOptions);

    let swiperImgOptions = {
        spaceBetween: 5,
        thumbs: {
            swiper: swiperProductThumb,
        }
    };

    const swiperProductImg = new Swiper(swiperImgContainer, swiperImgOptions);
}