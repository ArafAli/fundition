AccountHistory = new Mongo.Collection(null)

AccountHistory.getAccountHistory = function (name) {
    if (AccountHistory.find({ name: name }).fetch().length) {
        var lastActivity = AccountHistory.findOne({ name: FlowRouter.getParam("author") }, { sort: { n: 1 } }).n
        steem.api.getAccountHistory(name, lastActivity, 50, function (e, r) {
            if (!r || r.length < 1) return
            for (let i = 0; i < r.length; i++) {
                AccountHistory.filterOps(name, r[i])
            }
        })
    }
    else {
        steem.api.getAccountHistory(name, -1, 50, function (e, r) {
            if (!r || r.length < 1) return
            for (let i = 0; i < r.length; i++) {
                AccountHistory.filterOps(name, r[i])
            }
        })
    }
}

AccountHistory.filterOps = function (name, r) {
    var op = r[1].op
    var date = r[1].timestamp
    switch (op[0]) {
        case "curation_reward":
            AccountHistory.upsert({ _id: r[1].block }, { name: name, type: 'curation_reward', tx: op[1], date: date, n: r[0] })
            break;
        case "vote":
            if (op[1].weight > 1) {
                AccountHistory.upsert({ _id: r[1].trx_id }, { name: name, type: 'vote', tx: op[1], date: date, n: r[0] })
            }
            else {
                AccountHistory.upsert({ _id: r[1].trx_id }, { name: name, type: 'unvote', tx: op[1], date: date, n: r[0] })
            }
            break;
        case "claim_reward_balance":
            AccountHistory.upsert({ _id: r[1].trx_id }, { name: name, type: 'claim_reward_balance', tx: op[1], date: date, n: r[0] })
            break;
        case "comment":
            AccountHistory.upsert({ _id: r[1].trx_id }, { name: name, type: 'comment', tx: op[1], date: date, n: r[0] })
            break;
        case "account_witness_vote":
            AccountHistory.upsert({ _id: r[1].trx_id }, { name: name, type: 'account_witness_vote', tx: op[1], date: date, n: r[0] })
            break;
        case "transfer_to_vesting":
            AccountHistory.upsert({ _id: r[1].trx_id }, { name: name, type: 'transfer_to_vesting', tx: op[1], date: date, n: r[0] })
            break;
        case "account_update":
            AccountHistory.upsert({ _id: r[1].trx_id }, { name: name, type: 'account_update', tx: op[1], date: date, n: r[0] })
            break;
        case "custom_json":
            op[1].json = JSON.parse(op[1].json)
            switch (op[1].json[0]) {
                case "reblog":
                    AccountHistory.upsert({ _id: r[1].block }, { name: name, type: 'reblog', tx: op[1].json, date: date, n: r[0] })
                    break;
                case "follow":
                    if (op[1].json[1].what == "blog") {
                        AccountHistory.upsert({ _id: r[1].block }, { name: name, type: 'follow', tx: op[1].json, date: date, n: r[0] })
                    }
                    else {
                        AccountHistory.upsert({ _id: r[1].block }, { name: name, type: 'unfollow', tx: op[1].json, date: date, n: r[0] })
                    }
                    break;
            }
    }
}