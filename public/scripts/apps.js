//nav show and hide content
  $(window).on('load', function(){
    $('.LI-profile-badge').hide();
  });

  $('.linkedin').on('click', function(){
    $('.LI-profile-badge').slideToggle();
  });

  var repos = {};
  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/jkwong5/repos',
      type: 'GET',
      // headers: {'authorization': 'token ' + githubtoken},
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
