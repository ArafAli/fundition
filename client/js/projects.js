import moment from 'moment'
import xss from 'xss'

Projects = new Mongo.Collection(null)
//projectsObserver = new PersistentMinimongo2(Projects, 'projects');

Projects.getTrendingProjects = function (cb) {
    var query = {
        tag: 'fr',
        limit: 10
    };
    steem.api.getDiscussionsByCreated(query, function (err, result) {
        if (result) {
            for (var i = 0; i < result.length; i++) {
                Projects.upsert({ _id: result[i].id }, result[i])
            }
        }
        else {
            console.log(err, result);
        }
    });
}

Projects.getProjectByTags = function(page, tags, days, sort_by, order, maxDuration, cb) {
    var queries = []
    if (days) {
      dateTo = moment().format('YYYY-MM-DD');
      dateFrom = moment().subtract(days,'d').format('YYYY-MM-DD');
      queries.push('created:>='+dateFrom)
    }
    if (maxDuration && maxDuration < 99999)
      queries.push('meta.video.info.duration:<='+maxDuration)
    for (let i = 0; i < tags.length; i++)
      queries.push('meta.video.content.tags:'+tags[i])
  
    var query = queries.join(' AND ')
  
    AskSteem.search({
      q: query,
      include: 'meta,payout',
      sort_by: sort_by,
      pg: page,
      order: order,
      types: 'post'
    }, function(err, response) {
      var videos = []
      for (let i = 0; i < response.results.length; i++) {
        var video = Videos.parseFromAskSteem(response.results[i])
        if (video) videos.push(video)
      }
      for (let i = 0; i < videos.length; i++) {
        videos[i].source = 'askSteem'
        videos[i]._id += 'a'
        videos[i].askSteemQuery = {
          tags: tags.join('+'),
          byDays: days,
          sort_by: sort_by,
          order: order
        }
        try {
          Projects.upsert({ _id: videos[i]._id }, videos[i])
        } catch (err) {
          cb(err)
        }
      }
      cb(null)
    })
  }
  
  Projects.getProjectsByUser = function(user, limit, cb) {
    var query = {
      tag: user,
      limit: 200
    };
  
    if (limit) query.limit = limit
  
    steem.api.getDiscussionsByBlog(query, function (err, result) {
      if (err === null || err === '') {
        var i, len = result.length;
        var videos = []
        for (i = 0; i < len; i++) {
          var video = Videos.parseFromChain(result[i])
          if (video) videos.push(video)
        }
        for (var i = 0; i < videos.length; i++) {
          videos[i].source = 'chainByBlog'
          videos[i]._id += 'b'
          videos[i].fromBlog = FlowRouter.getParam("author")
          try {
            Videos.upsert({ _id: videos[i]._id }, videos[i])
          } catch (err) {
            cb(err)
          }
        }
        cb(null)
      } else {
        cb(err);
      }
    });
  }

  Projects.parseFromAskSteem = function(result) {
    try {
      var project = result.meta.video
    } catch(e) {
      console.log(e)
    }
    if (!project) return
    project.active_votes = result.net_votes
    project.author = result.author
    project.permlink = result.permlink
    project.created = result.created
    project.pending_payout_value = result.payout+' SBD'
    project.total_payout_value = '0.000 SBD'
    project.curator_payout_value = '0.000 SBD'
    return project;
  }
  