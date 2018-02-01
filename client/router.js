Router.route('/index.html', function () {
  this.layout('mainlayout');
  this.render('home');
  
});

Router.route('/', function () {
    this.layout('mainlayout');
    this.render('home');
    
  });

  Router.route('/login', function () {
    this.layout('mainlayout');
    this.render('login');
  });

  Router.route('/explore', function () {
    this.layout('mainlayout');
    this.render('explore');
  });

  Router.route('/newproject', function () {
    this.layout('mainlayout');
    this.render('newproject');
  });

  Router.route('/myprojects', function () {
    this.layout('mainlayout');
    this.render('myprojects');
  });

  Router.route('/learnmore', function () {
    this.layout('mainlayout');
    this.render('learnmore');
  });