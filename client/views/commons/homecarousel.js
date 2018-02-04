var carousel = require('owl.carousel')

Template.homecarousel.rendered = function () {
    $('.carousel').owlCarousel('destroy');
}

Template.homecarousel.onRendered(function() {
    $('.carousel').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        singleItem: true
    });
});