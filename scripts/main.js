$('.slider').slick({
    autoplay: true,
    arrows: true,
    centerMode: true,
    slidesToShow: 3,
    prevArrow:'<button type="button" class="slick-prev">  Previous</button>',
    nextArrow:'<button type="button" class="slick-next">Next</button>',

    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]

});
