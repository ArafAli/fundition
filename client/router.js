Router.configure({
  layoutTemplate: 'mainlayout'
});

Router.route('/', function () {
  this.layout('mainlayout');
  this.render('home');
  Projects.getTrendingProjects();
});

Router.route('/login', function () {
  this.layout('mainlayout');
  this.render('login');
});

Router.route('/newproject', function () {
  this.layout('mainlayout');
  this.render('newproject');
});

Router.route('/myprojects', function () {
  this.layout('mainlayout');
  this.render('myprojects');
});

Router.route('/myfundition', function () {
  this.layout('mainlayout');
  this.render('myfundition');
});

Router.route('/learnmore', function () {
  this.layout('mainlayout');
  this.render('learnmore');
});

Router.route('/sc2login', function () {
  this.layout('mainlayout');
  this.render('home');
  Template.myfundition.sc2UserAuthentify(window.location.search.substring(1))
  Projects.getProjectsByUser(sessionStorage.getItem('username'))
  Router.go('/myfundition')
});



Router.route('/explore', function () {
  this.layout('mainlayout');
  this.render('explore');
});

Router.route('/explore/:tag', function () {
  this.layout('mainlayout');
  this.render('explore');
});