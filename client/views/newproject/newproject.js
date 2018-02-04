Template.newproject.helpers({
    onBasics: function () {
        if(Session.get('currentStep') === "basics")
        return true
    },
    onRewards: function () {
        if(Session.get('currentStep') === "rewards")
        return true
    },
    onAccount: function () {
        if(Session.get('currentStep') === "account")
        return true
    },
    onStory: function () {
        if(Session.get('currentStep') === "story")
        return true
    },
    onPreview: function () {
        if(Session.get('currentStep') === "preview")
        return true
    },
    onConfirmProject: function () {
        if(Session.get('currentStep') === "confirmproject")
        return true
    }
  })
  

Template.newproject.rendered = function () {
    Session.set('currentStep','basics')
}

Template.newproject.events({
'click #submitproject': function (event) {
    event.preventDefault()
    var form = document.getElementById('basicsform')
    var project = Template.newproject.createNewProject(form)
    sessionStorage.setItem('project', project);
    console.log( sessionStorage.getItem('project'))
  }
})

Template.newproject.createNewProject = function (form) {
    var project = {
      basics: {
        category:form.category.value,
        title: form.title.value,
        description: form.short_desc.value,
        image:form.image.value,
        duration: form.duration.value,
        ending: form.ending.value,
        goal: form.goal.value,
        type: form.type.value
      },
      rewards: {
        title: form.title.value,
        description: form.short_desc.value,
        image:form.image.value,
        duration: form.duration.value,
        ending: form.ending.value,
        goal: form.goal.value
      },
      story: {
        projectvideo: form.title.value,
        description: form.short_desc.value,
        challenges:form.image.value,
      },
      accounts: {
        name: form.title.value,
        biography: form.short_desc.value,
        location:form.image.value,
        websites: form.duration.value,
        collaborators: form.ending.value,
      }
    }
}
