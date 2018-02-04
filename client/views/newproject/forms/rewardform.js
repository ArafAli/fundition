Reward = new Mongo.Collection(null)

Template.rewardform.events({
    'click #addreward': function (event) {
        event.preventDefault()
        var form = document.getElementById('rewardsform')
        $("#rewardsform").append('{{ rewards}}');
    }
})

Template.explore.helpers({
    reward: function () {
        return Reward.find().fetch()
    }
  })
  