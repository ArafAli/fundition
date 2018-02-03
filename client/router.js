Router.configure({
  layoutTemplate: 'mainlayout'
});

Router.route('/', function () {
  this.layout('mainlayout');
  this.render('home');
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

Router.route('/learnmore', function () {
  this.layout('mainlayout');
  this.render('learnmore');
});

Router.route('/sc2', function () {
  this.layout('mainlayout');
  this.render('home');
});

Router.route('/explore', function () {
  this.layout('mainlayout');
  this.render('explore');
});

Router.route('/explore/:tag', function () {
  this.layout('mainlayout');
  this.render('explore');
});