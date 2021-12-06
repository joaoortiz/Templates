$(document).ready(function () {

    // Progress bar
    let containerA = document.getElementById("circleA");
    let containerB = document.getElementById("circleB");
    let containerC = document.getElementById("circleC");
    let containerD = document.getElementById("circleD");

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#ee3b3b',
        strokeWidth: 8,
        duration: 700,
        from: { color: '#333333' },
        to: { color: '#ee3b3b' },

        svgStyle: {
            width: '70%',
        },

    step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * 19);
            circle.setText(value);

        }

    });
    
    let circleB = new ProgressBar.Circle(containerB, {

        color: '#ee3b3b',
        strokeWidth: 8,
        duration: 1800,
        from: { color: '#333333' },
        to: { color: '#ee3b3b' },

        svgStyle: {
            width: '70%',
        },

    step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * 1250);
            circle.setText(value);

        }

    });
    let circleC = new ProgressBar.Circle(containerC, {

        color: '#ee3b3b',
        strokeWidth: 8,
        duration: 1500,
        from: { color: '#333333' },
        to: { color: '#ee3b3b' },

        svgStyle: {
            width: '70%',
        },

    step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * 350);
            circle.setText(value);

        }

    });

    let circleD = new ProgressBar.Circle(containerD, {

        color: '#ee3b3b',
        strokeWidth: 8,
        duration: 2250,
        from: { color: '#333333' },
        to: { color: '#ee3b3b' },

        svgStyle: {
            width: '70%',
        },

    step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * 3520);
            circle.setText(value);

        }

    });

    circleA.animate(1.0);
    circleB.animate(1.0);
    circleC.animate(1.0);
    circleD.animate(1.0);

    setTimeout(function() {
        $('#SectionBG1').parallax({imageSrc: 'img/bg1.jpg'});
        
      }, 200);
    

});