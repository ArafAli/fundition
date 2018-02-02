var carousel = require('owl.carousel')
 
Template.homecarousel.rendered = function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 2,
      nav: true,
      responsiveBaseElement: document.getElementsByClassName('ui container'),
      navText: [ '', '' ],
      animateOut: 'slideOutDown'
    });
}
