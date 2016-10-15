  var repos = {};
  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'github/user/repos',
      type: 'GET',
      headers: {'authorization': 'token ' + GITHUB_TOKEN},
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

  // var requri   = 'https://api.github.com/users/jkwong5';
  // var repouri  = 'https://api.github.com/users/jkwong5/repos';
  // requestJSON(requrie, function(json) {
  //   var fullname   = json.name;
  //   var username   = json.login
  //   var aviurl     = json.avatar_url;
  //   var profileurl = json.html_url;
  //   var location   = json.location;
  //   var followersnum = json.followers;
  //   var followingnum = json.following;
  //   var reposnum     = json.public_repos;
  //
  //   if(fullname === undefined) { fullname = username; }
  //
  //   var outhtml = '<h2>' + fullname + ' <span class="smallname">(@<a href="' + profileurl + '" target="_blank">' + username + '</a>)</span></h2>';
  //   outhtml = outhtml + '<div class="ghcontent"><div class="avi"><a href="' + profileurl + '" target="_blank"><img src="' + aviurl + '" width="80" height="80" alt="' + username + '"></a></div>';
  //   outhtml = outhtml + '<p>Followers: ' + followersnum + ' - Following: ' + followingnum + '<br>Repos: ' + reposnum + '</p></div>';
  //   outhtml = outhtml + '<div class="repolist clearfix">';
  //
  //   var repositories;
  //   $.getJSON(repouri, function(json){
  //     repositories = json;
  //     outputPageContent();
  //   });
  //
  //   function outputPageContent() {
  //     if(repositories.length == 0) { outhtml = outhtml + '<p>No repos!</p></div>'; }
  //     else {
  //       outhtml = outhtml + '<p><strong>Repos List:</strong></p> <ul>';
  //       $.each(repositories, function(index) {
  //         outhtml = outhtml + '<li><a href="' + repositories[index].html_url + '" target="_blank">' + repositories[index].name + '</a></li>';
  //       });
  //       outhtml = outhtml + '</ul></div>';
  //     }
  //     $('#ghapidata').html(outhtml);
  //   } // end outputPageContent()
  // });// end requestJSON Ajax call
