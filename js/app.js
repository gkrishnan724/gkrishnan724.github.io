var username = "gkrishnan724";
var url = "https://api.github.com/users/"+username;

$.get(url,function(data,status){
    var imgsrc = data.avatar_url;
    var name = data.name;
    $("#avatar").attr("src",imgsrc);
    $("#name").html(name);
    
});