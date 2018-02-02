Template.explore.helpers({
  isOnMobile: function () {
    if (/Mobi/.test(navigator.userAgent)) {
      return true;
    }
  },
  trendingProjects: function () {
    return Projects.find().fetch()
  }
})

// Template.explore.rendered = function () {

// }