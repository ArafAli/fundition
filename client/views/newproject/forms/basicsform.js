Template.explore.rendered = function () {
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
