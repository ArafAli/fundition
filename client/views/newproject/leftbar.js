Template.leftbar.events({
    'click .step.basics': function (event) {
        Template.leftbar.goto('basics')
      },
      'click .step.rewards': function (event) {
        Template.leftbar.goto('rewards')
       },
       'click .step.story': function (event) {
        Template.leftbar.goto('story')
      },
      'click .step.account': function (event) {
        Template.leftbar.goto('account')
       },
       'click .step.preview': function (event) {
        Template.leftbar.goto('preview')
      },
      'click .step.confirm': function (event) {
          if(session.get('projectcompleted'))
        Template.leftbar.goto('confirm')
       }
    })

    Template.leftbar.goto = function (where) {
        $('.step.active').removeClass('active')
        $('.step.'+ where).addClass('active')
        Session.set('currentStep',where)
    }

    Template.leftbar.rendered = function () {
        $('.ui.dropdown')
        .dropdown();
    }
