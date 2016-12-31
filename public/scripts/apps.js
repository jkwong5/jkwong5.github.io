//nav show and hide content
  $(window).on('load', function(){
    $('.LI-profile-badge').hide();
    $('#repoData').hide();
  });
  $('.icon-linkedin').on('click', function(){
    $('.LI-profile-badge').slideToggle();
    $('.intro').slideToggle();
  });
  $('.toggle').on('click', function(){
    $('#repoData').fadeToggle();
  });


  function Project(opts){
    this.name = opts.name;
    this.url = opts.url;
    this.img = opts.img;
    this.icon = opts.icon;
    this.description = opts.description;
    this.repository = opts.repository;
  }

  var projectView = {};
  Project.all = [];

  projectView.initIndexPage = function(){
    var template = Handlebars.compile($('#projectTemplate').html());
    Project.all.forEach(function(a){
      $('#projectData').append(template(a));
    });
  };

  // Project.prototype.toHtml = function(){
  //   var template = Handlebars.compile($('#projectTemplate').html());
  //   return template(this);
  // };

  Project.loadAll = function(rawData) {
    rawData.forEach(function(e){
      Project.all.push(new Project(e));
    });
  };

  Project.fetchAll = function(){
    if (localStorage.rawData){
      Project.loadAll(JSON.parse(localStorage.rawData));
      projectView.initIndexPage();
    }
  };
    // else {
    //   $.getJSON('data/skilldata.json', function(projects) {
    //     Project.loadAll(projects);
    //     localStorage.setItem('projects', JSON.stringify(projects));
    //     projectView.initIndexPage();
    //   });
  // var repos = {};
  // repos.all = [];
  //
  // repos.requestRepos = function(callback) {
  //   $.ajax({
  //     url: 'https://api.github.com/users/jkwong5/repos?per_page=10&sorted=updated',
  //     type: 'GET',
  //     // headers: {'authorization': 'token ' + githubtoken},
  //     success: function(data){
  //       data.forEach(function(ele){
  //         console.log(ele);
  //       });
  //       repos.all = data;
  //     }
  //   }).done(callback);
  // };
  //
  // repos.with = function() {
  //   return repos.all.filter(function(repo) {
  //     return repo.fork === false;
  //   });
  // };
  //
  // var repoView = {};
  // var render = Handlebars.compile($('#repo-template').html());
  // var ui = function(){
  //   var $repos = $('#repos');
  //   $repos.find('ul').empty();
  //   $repos.show().siblings();
  // };
  //
  // repoView.index = function() {
  //   ui();
  //   $('#repos ul').append(
  //     repos.with('name').map(render)
  //   );
  // };

  function Repo(opts){
    this.name = opts.name;
    this.html_url = opts.html_url;
    this.description = opts.description;
    this.url = opts.url;
  }

  var repoView = {};
  Repo.all = [];

  repoView.initIndexPage = function(){
    Repo.all.forEach(function(a){
      $('#repoData').append(a.toHtml());
    });
  };

  Repo.prototype.toHtml = function(){
    var temp = Handlebars.compile($('#repoTemplate').text());
    return temp(this);
  };

  Repo.loadAll = function(data) {
    data.forEach(function(e){
      Repo.all.push(new Repo(e));
    });
  };

  Repo.fetchAll = function(){
    if (localStorage.data){
      Repo.loadAll(JSON.parse(localStorage.data));
      repoView.initIndexPage();
    } else {
      $.getJSON('https://api.github.com/users/jkwong5/repos', function(data) {
        Repo.loadAll(data);
        localStorage.setItem('data', JSON.stringify(data));
        repoView.initIndexPage();
      });
    }
  };

  Repo.fetchAll();
  Project.fetchAll();
  //copyright
  var d = new Date();
  var y = d.getFullYear();
  document.getElementById('copy').innerHTML = y;

  // module.repoView = repoView;
  // module.repos = repos;
  // module.Project = Project;
