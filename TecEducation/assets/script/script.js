$(".slider").owlCarousel({
    stagePadding: 25,
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
    stagePadding: 15,
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

$(".sliderBlog").owlCarousel({
    stagePadding: 25,
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
        }
    }
});


/*********************************** */
$(document).ready(function () {

    $('.buttongallery').on('click', function () {
        let type = $(this).attr('id');
        let boxes = $('.gallerybox');

        $('.buttongallery').removeClass('active');
        $(this).addClass('active');

        if (type == 'ButtonRooms') {
            eachBoxes('room', boxes);
        }else if (type == 'ButtonStructure') {
            eachBoxes('struc', boxes);
        } else if (type == 'ButtonSports') {
            eachBoxes('sport', boxes);
        }else{
            eachBoxes('all', boxes);
        }

    });

    function eachBoxes(type, boxes) {
        if (type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function () {
                if (!$(this).hasClass(type)) {
                    $(this).fadeOut();
                }else{
                    $(this).fadeIn();
                }
            });
        }
    }

});