User = new Mongo.Collection(null)

User.getUser = function (username) {
  steem.api.getAccounts(username, function (error, result) {
    for (var i = 0; i < result.length; i++) {
      var user = Users.findOne({ username: result[i].name })
      if (result[i].json_metadata && JSON.parse(result[i].json_metadata))
        user.json_metadata = JSON.parse(result[i].json_metadata)
      user.reward_sbd_balance = result[i].reward_sbd_balance
      user.reward_steem_balance = result[i].reward_steem_balance
      user.reward_vesting_balance = result[i].reward_vesting_balance
      user.reward_vesting_steem = result[i].reward_vesting_steem
      User.update({ username: user.username }, user)
    }
  })
}