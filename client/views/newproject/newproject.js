Template.newproject.rendered = function () {
    $('.ui.dropdown')
    .dropdown();
}



Template.newproject.events({
'click #submitproject': function (event) {
    event.preventDefault()
    var form = document.getElementById('projectform')
    var project = Template.newproject.createNewProject(form)
    console.log(project)
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