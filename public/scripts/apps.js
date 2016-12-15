//nav show and hide content
  $(window).on('load', function(){
    $('.LI-profile-badge').hide();
  });

  $('.icon-linkedin').on('click', function(){
    $('.LI-profile-badge').slideToggle();
  });

  var repos = {};
  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/jkwong5/repos?per_page=10&sorted=updated',
      type: 'GET',
      // headers: {'authorization': 'token ' + githubtoken},
      success: function(data){
        data.forEach(function(ele){
          console.log(ele);
        });
        repos.all = data;
      }
    }).done(callback);
  };

  repos.with = function() {
    return repos.all.filter(function(repo) {
      return repo.fork === false;
    });
  };

  var repoView = {};
  var render = Handlebars.compile($('#repo-template').html());
  var ui = function(){
    var $repos = $('#repos');
    $repos.find('ul').empty();
    $repos.show().siblings();
  };

  repoView.index = function() {
    ui();
    $('#repos ul').append(
      repos.with('name').map(render)
    );
  };

  function Project(opts){
    this.name = opts.name;
    this.html_url = opts.html_url;
    this.description = opts.description;
    this.url = opts.url;
  }

  var projectView = {};

  Project.all = [];

  projectView.initIndexPage = function(){
    Project.all.forEach(function(a){
      $('#projectData').append(a.toHtml());
    });
  };

  Project.prototype.toHtml = function(){
    var temp = Handlebars.compile($('#projectTemplate').text());
    return temp(this);
  };

  Project.loadAll = function(data) {
    data.forEach(function(e){
      Project.all.push(new Project(e));
    });
  };

  Project.fetchAll = function(){
    if (localStorage.data){
      Project.loadAll(JSON.parse(localStorage.data));
      projectView.initIndexPage();
    } else {
      $.getJSON('https://api.github.com/users/jkwong5/repos', function(data) {
        Project.loadAll(data);
        localStorage.setItem('data', JSON.stringify(data));
        projectView.initIndexPage();
      });
    }
  };

  Project.fetchAll();

  //copyright
  var d = new Date();
  var y = d.getFullYear();
  document.getElementById('copy').innerHTML = y;

  // module.repoView = repoView;
  // module.repos = repos;
  // module.Project = Project;
