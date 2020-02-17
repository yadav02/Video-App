console.log("js is lodaded");
var videoForm = document.getElementById('video-form');

videoForm.onsubmit = function(e){
    e.preventDefault();
    var enteredTiitle = e.target.title.value;
    var enteredThumbnail = e.target.thumbnail.value;
    var videoCreateonObj = {
        "title":enteredTiitle,
        "thumbnail":enteredThumbnail
    } 
    alert(JSON.stringify(videoCreateonObj));
    var xhttp = new XMLHttpRequest();
    xhttp.open('POST', 'http://5dfb77ac0301690014b8fbce.mockapi.io/PlayList', true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(videoCreateonObj));
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 ){
           location.assign('./index.html')
        }
    }
}
