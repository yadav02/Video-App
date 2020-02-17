var apiEndpoint = 'https://5dfb77ac0301690014b8fbce.mockapi.io/PlayList';

function createVideoCard(cardObj) {
  var videoCard = document.createElement("div");
  videoCard.className = "menu-item";

  var image = document.createElement("img");
  image.className = "image";
  image.src = cardObj.thumbnail;
  videoCard.appendChild(image);

  var title = document.createElement("h3")
  title.innerHTML = cardObj.title;
  videoCard.appendChild(title);
  
  console.log(videoCard);
  return videoCard;
}

var videoGrid = document.getElementById('video-grid')
var Http = new XMLHttpRequest();
Http.open("GET",apiEndpoint , true);
Http.onreadystatechange = function(){
    if(this.readyState === 4){
        var videoListData = JSON.parse(this.responseText);
        for (var i = 0; i < videoListData.length; i++) { 
            videoGrid.appendChild(createVideoCard(videoListData[i]));
            }
        }
}
Http.send();


var btnLogin = document.getElementById('btn-login');
var btnLogout = document.getElementById('btn-logout');
var createVideoMenu = document.getElementById('create-video-menu');
var isUserLoggedIn = localStorage.getItem('isUserLoggedIn');

if(isUserLoggedIn === 'true'){
  btnLogin.style.display = 'none'
  btnLogout.style.display = 'inline'
  createVideoMenu.style.display = 'inline'
}else{
  btnLogin.style.display = 'inline'
  btnLogout.style.display = 'none'
  createVideoMenu.style.display = 'none' 
}

btnLogout.onclick = function() {
  alert("You are logged out");
  btnLogin.style.display = 'inline';
  btnLogout.style.display = 'none';
  createVideoMenu.style.display = 'none'; 
}



