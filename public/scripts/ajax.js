(function(module) {
  function Project(opts){
    this.name = opts.name;
    this.repository = opts.repository;
    this.blurb = opts.blurb;
    this.category = opts.category;
    this.status = opts.status;
    this.pic = opts.pic;
    this.url = opts.url;
  }

  Project.all = [];

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
      $.getJSON('data/firebase.json', function(data) {
        Project.loadAll(data);
        localStorage.setItem('data', JSON.stringify(data));
        projectView.initIndexPage();
      });
    }
  };




  var repos = {};
  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'github/user/repos',
      type: 'GET',
      headers: {'authorization': 'token ' + githubtoken},
      success: function(data){
        repos.all = data;
      }
    }).done(callback);
  };

  repos.with = function() {
    return repos.all.filter(function(repo) {
      return repo.fork === false;
    });
  };

  module.Project = Project;
  module.repos = repos;
})(window);
