Template.basicsform.rendered = function () {
    $('#basicsform').form({
      fields: {
        category     : 'empty',
        title   : 'empty',
        description : 'empty',
        image : ['minLength[6]', 'empty'],
        duration   : ['minCount[2]', 'empty'],
        ending    : 'checked',
        goal   : ['minCount[2]', 'empty'],
        type   : ['minCount[2]', 'empty']
      }
    })
  ;
}

Template.basicsform.events({
  'click #submitproject': function (event) {
      event.preventDefault()
      var form = document.getElementById('basicsform')
      var project = Template.newproject.createNewProject(form)
    }
  })

Template.basicsform.createBasicsForm = function (form) {
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
    }
    //add it to session
  }
}
