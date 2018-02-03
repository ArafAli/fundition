Template.registerHelper('imgFromBody', function (string) {
    if (!string) return
    else
    {
        return string.split('(https://steemitimages.com/').pop().split(')').shift();
    }
  })

