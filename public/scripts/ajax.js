  var repos = {};
  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'github/user/repos',
      type: 'GET',
      // headers: {'authorization': 'token ' + GITHUB_TOKEN},
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
