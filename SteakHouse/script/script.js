const divsFade = document.querySelectorAll('.DivFade');
const divsGrow = document.querySelectorAll('.DivGrow');

const optionsAppear = {
  threshold: 0.5,
  rootMargin: "0px 1000px 0px 10000px"
};

const appearInFades = new IntersectionObserver(function (entries, appearInFades) {
  // Loop over the entries
  entries.forEach(entry => {
      // If the element is not visible
      /*if (!entry.isIntersecting) {
        return;
        // Add the animation class
      } */ if (entry.isIntersecting) {
      console.log(entry.target);
      entry.target.classList.add("fade-in");
      appearInFades.unobserve(entry.target);
    }
  });
}, optionsAppear);

divsFade.forEach(div => {
  appearInFades.observe(div);
});

const appearInGrows = new IntersectionObserver(function (entries, appearInGrows) {
  // Loop over the entries
  entries.forEach(entry => {
      // If the element is not visible
      /*if (!entry.isIntersecting) {
        return;
        // Add the animation class
      } */ if (entry.isIntersecting) {
      console.log(entry.target);
      entry.target.classList.add("grow-up");
      appearInGrows.unobserve(entry.target);
    }
  });
}, optionsAppear);

divsGrow.forEach(div => {
  appearInGrows.observe(div);
});


$(".slider").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  smartSpeed: 1500,
  animateIn: 'linear',
  animateOut: 'linear',
  navText : ["<i class='fa fa-chevron-left mx-4'></i>","<i class='fa fa-chevron-right mx-4'></i>"],
  responsive: {
    0:{
      items:1,
      nav:true
  },
  768:{
      items:2,
      nav:true
  },
  992:{
      items:3,
      nav:true,
  }
  }
});