Template.topbar.events({
    'click #loginbutton': function(event) {
      event.preventDefault()
      window.location.href = sc2.getLoginURL()
    }
  })
  