import moment from 'moment'
import xss from 'xss'

Projects = new Mongo.Collection(null)
//projectsObserver = new PersistentMinimongo2(Projects, 'projects');

Projects.getTrendingProjects = function (cb) {
  var query = {
    tag: 'fr',
    limit: 10
  };
  steem.api.getDiscussionsByCreated(query, function (error, result) {
    if (result) {
      for (var i = 0; i < result.length; i++) {
        Projects.upsert({ _id: result[i].id, type: 'trending' }, result[i], )
      }
    }
    else {
      console.log(err, result);
    }
  });
}


Projects.getProjectsByUser = function (user , cb) {
  console.log(user)
  var query = {
    tag: user,
    limit: 200
  };
  steem.api.getDiscussionsByBlog({tag: user, limit: 100}, function(err, result) {
    if (result) {
      for (var i = 0; i < result.length; i++) {
        console.log(result[i])
        Projects.upsert({ _id: result[i].id, type: 'trending' }, result[i], )
      }
    }
    else {
      console.log(err, result);
    }
  });
}

Projects.parseFromAskSteem = function (result) {
  try {
    var project = result.meta.video
  } catch (e) {
    console.log(e)
  }
  if (!project) return
  project.active_votes = result.net_votes
  project.author = result.author
  project.permlink = result.permlink
  project.created = result.created
  project.pending_payout_value = result.payout + ' SBD'
  project.total_payout_value = '0.000 SBD'
  project.curator_payout_value = '0.000 SBD'
  return project;
}
