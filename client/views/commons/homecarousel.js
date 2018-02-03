var carousel = require('owl.carousel')

Template.homecarousel.rendered = function () {
    // console.log("first")
    // $('.carousel').owlCarousel('destroy');
    // $('.carousel').owlCarousel({
    //     loop: true,
    //     nav: false,
    //     items: 1,
    //     singleItem: true
    // });
}


Template.homecarousel.onRendered(function() {
    console.log("sec")
    $('.carousel').owlCarousel('destroy');
    $('.carousel').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        singleItem: true
    });
});