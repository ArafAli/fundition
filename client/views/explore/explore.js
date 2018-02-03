Template.explore.helpers({
  trendingProjects: function () {
    if (Projects.find().fetch()) return Projects.find().fetch()
  },
  trendingTags: function () {
    if (TrendingTags.find().fetch().length) return TrendingTags.find().fetch()
    else {
      TrendingTags.getTrendingTags();
    }
    return TrendingTags.find().fetch()
  }

})

Template.explore.rendered = function () {
}
