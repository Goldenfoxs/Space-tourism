$(function () {
    $('.slider__inner').slick(
        {
            dots: false,
            arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><img src='images/arrow-left.svg'></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><img src='images/arrow-right.svg'></button>",
            responsive: [
            {
                breakpoint: 800,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                        arrows: false,
                        // dots: false,
                }
            }
            ]
        }
    )
})
