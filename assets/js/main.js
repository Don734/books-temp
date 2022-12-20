$(document).ready(function () {
    swiperSlider();
    productGallery();
    cartModal();
    catalogAside();
    mainNav();
    quantityControl();
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
        slidesPerView: 1,
        autoWidth: true,
        thumbs: {
            swiper: swiperProductThumb,
        }
    };

    const swiperProductImg = new Swiper(swiperImgContainer, swiperImgOptions);
}

function cartModal() {
    const modal = $('.cart-modal');
    const modalOpen = $('.cartModalOpen');
    const modalClose = modal.find('.close');

    modalOpen.on('click', function (e) {
        e.preventDefault();
        modal.addClass('show');
    })

    modalClose.on('click',function (e) {
        e.preventDefault();
        modal.removeClass('show');
    })

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.cart-modal, .cartModalOpen').length) {
            modal.removeClass('show');
        }
    })
}

function catalogAside() {
    const aside = $('.catalog-aside');
    const catalogOpen = $('.catalog-menu');
    const catalogClose = aside.find('.close');
    const dropdown = aside.find('.dropdown-toggle');

    catalogOpen.on('click', function (e) {
        e.preventDefault();
        aside.addClass('show');
    })

    dropdown.on('click', function(e) {
        e.preventDefault();

        if ($(this).parent('.dropdown-item').hasClass('show')) {
            $(this).parent('.dropdown-item').removeClass('show');
        } else {
            $(this).parent('.dropdown-item').addClass('show');
        }
    })

    catalogClose.on('click',function (e) {
        e.preventDefault();
        aside.removeClass('show');
    })
    

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.catalog-aside, .catalog-menu').length) {
            aside.removeClass('show');
        }
    })
}

function mainNav() {
    const nav = $('.top-nav');
    const burger = $('.top-bar .burger');

    burger.on('click', function (e) {
        e.preventDefault();
        nav.addClass('show');
        nav.slideDown(300);
    })

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.top-nav, .burger').length) {
            nav.removeClass('show');
        }
    })
}

function quantityControl() {
    const productQuantityContainer = $(".quantity_control");

    const productQuantityValue = productQuantityContainer.find(
        ".quantity__value"
    );
    productQuantityContainer
        .find(".btn")
        .on("click", function (e) {
            e.preventDefault();
            const btn = $(this);
            const max = productQuantityValue.data("max") * 1;
            const value = productQuantityValue.data("value") * 1;
            let nextValue;
            if (btn.hasClass("btn-quantity__minus")) {
                nextValue = value > 1 ? value - 1 : value;
            } else {
                nextValue = value < max ? value + 1 : value;
            }
            productQuantityValue
                .data({
                    value: nextValue
                })
                .html(nextValue);
        });
}