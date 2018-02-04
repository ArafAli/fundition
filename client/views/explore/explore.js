var carousel = require('owl.carousel')

Template.explore.helpers({
  trendingProjects: function () {
    return Projects.find().fetch()
  },
  trendingTags: function () {
    return TrendingTags.find().fetch()
  },
  isLoaded: function () {
    return Session.get('loaded')
  }
})

Template.explore.rendered = function () {
  $('.carousel').owlCarousel('destroy');
  Session.set('loaded', true)
  $('.carousel').owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    singleItem: true
  });
}

