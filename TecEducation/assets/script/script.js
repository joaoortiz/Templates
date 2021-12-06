$(".slider").owlCarousel({
stagePadding:25,
    margin: 40,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 500,
    animateIn: 'linear',
    animateOut: 'linear',
    navText: ["<i class='fa fa-arrow-circle-left fa-lg mx-4 mt-4 text-primary'></i>", "<i class='fa fa-arrow-circle-right fa-lg mt-4 mx-4 text-primary'></i>"],
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        768: {
            items: 3,
            nav: true
        }
    }
});

$(".sliderTeacher").owlCarousel({
    stagePadding:15,
        margin: 40,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 500,
        animateIn: 'linear',
        animateOut: 'linear',
        navText: ["<i class='fa fa-arrow-circle-left fa-lg mx-4 mt-4 text-primary'></i>", "<i class='fa fa-arrow-circle-right fa-lg mt-4 mx-4 text-primary'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 2,
                nav: true
            },
            1200: {
                items: 3,
                nav: true
            },
            1360: {
                items: 4,
                nav: true
            }

        }
    });


    /*********************************** */
    