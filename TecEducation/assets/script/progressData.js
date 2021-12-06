$(document).ready(function () {
    // Progress bar
    let containerA = document.getElementById("circleA");
    let containerB = document.getElementById("circleB");
    let containerC = document.getElementById("circleC");
    let containerD = document.getElementById("circleD");

    let circleA = new ProgressBar.Circle(containerA, {
        color: '#000000',
        strokeWidth: 8,
        duration: 800,
        from: { color: '#ccc' },
        to: { color: '#FFFFFF' },
        svgStyle: {
            width: '70%',
        },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 5);
            circle.setText(value);
        }
    });
    let circleB = new ProgressBar.Circle(containerB, {
        color: '#000000',
        strokeWidth: 8,
        duration: 1000,
        from: { color: '#ccc' },
        to: { color: '#FFFFFF' },
        svgStyle: {
            width: '70%',
        },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 18);
            circle.setText(value);
        }
    });
    let circleC = new ProgressBar.Circle(containerC, {
        color: '#000000',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#ccc' },
        to: { color: '#FFFFFF' },
        svgStyle: {
            width: '70%',
        },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 78);
            circle.setText(value);
        }
    });
    let circleD = new ProgressBar.Circle(containerD, {
        color: '#000000',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#ccc' },
        to: { color: '#FFFFFF' },
        svgStyle: {
            width: '70%',
        },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 3500);
            circle.setText(value);
        }
    });


    // loader ao rolar a pagina no element

    let dataAreaOffSet = $('#SectionData').offset();
    let stop = 0;

    $(window).scroll(function (e) {
        let scroll = $(window).scrollTop();

        if (scroll > (dataAreaOffSet.top - 500) && stop == 0) {
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;

        }
    });



});