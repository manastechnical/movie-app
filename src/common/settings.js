export const Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 2000,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 2,
                infinite: false,
                swipeToSlide: true,
            }
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                infinite: false,
                swipeToSlide: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: false,
                swipeToSlide: true,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: false,
                swipeToSlide: true,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
                swipeToSlide: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                swipeToSlide: true,
            }
        }
    ]
};