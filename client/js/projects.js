import moment from 'moment'
import xss from 'xss'

Projects = new Mongo.Collection(null)
projectsObserver = new PersistentMinimongo2(Projects, 'projects');


Projects.getTrendingProjects = function (type, limit, cb) {
    var query = {
        tag: 'fr',
        limit: 10
    };
    steem.api.getDiscussionsByTrending(query, function (err, result) {
        console.log(err, result);
        if (result) {
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
                try {
                    Projects.upsert({ _id: result[i]._id }, result[i])
                } catch (err) {
                    //cb(err)
                }
            }
        }
        else {

        }
    });
}