TrendingTags = new Mongo.Collection(null)
//projectsObserver = new PersistentMinimongo2(Projects, 'projects');


TrendingTags.getTrendingTags = function () {
    steem.api.getTrendingTags(afterTag, limit, function(err, result) {
      console.log(err, result);
    });
}

