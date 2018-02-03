Template.topbar.events({
    'click #loginbutton': function(event) {
      event.preventDefault()
      //console.log(sc2.getLoginURL())
      window.location.href = sc2.getLoginURL()
    }
  })
  