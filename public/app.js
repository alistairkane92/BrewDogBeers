var makeRequest = function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", callback);
    request.send();
};

var requestComplete = function(){
    if(this.status !== 200) return;
    console.log("Connected");
}

var app = function(){
    var url = "https://api.punkapi.com/v2/beers"
    makeRequest(url, requestComplete);
}

window.addEventListener('load', app);
