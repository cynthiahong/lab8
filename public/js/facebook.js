function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser (response){
  $("#facebookLogin").hide();
  console.log(response);
  console.log(response.first_name);
  console.log(response.name);
  var myname = document.getElementById('name').innerHTML = response.name;
  console.log(myname);
  $("#photo").attr("src","https://scontent.xx.fbcdn.net/hprofile-xtp1/v/t1.0-1/p480x480/10411016_10206271495737179_387945543987349244_n.jpg?oh=c19217ebd354f9710570dd78ae577120&oe=575B09F4");

}
