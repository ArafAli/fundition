TrendingTags = new Mongo.Collection(null)
trendingTagsObserver = new PersistentMinimongo2(TrendingTags, 'trendingtags');


TrendingTags.getTrendingTags = function () {
  steem.api.getTrendingTags('life', 20, function (err, result) {
    if (result) {
      for (var i = 0; i < result.length; i++) {
        TrendingTags.upsert({ _id: result[i].name }, result[i])
      }
    }
    else {
      console.log(err, result);
    }
  });
}

