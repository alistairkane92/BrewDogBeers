var makeRequest = function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", callback);
    request.send();
};

var requestComplete = function(){
    if(this.status !== 200) return;

    var jsonString = this.responseText;
    var beers = JSON.parse(jsonString);

    createLi(returnNames(beers));
}

var returnNames = function(beers){
    namesArray = [];

    for (beer of beers){
        namesArray.push(beer.name);
    }

    return namesArray
}

var createLi = function(array){
    console.log(array);
    var display = document.getElementById("beer-list");

    for (item of array){
        var li = document.createElement('li');
        li.innerText = item;
        display.appendChild(li);
    }
}
var app = function(){
    var url = "https://api.punkapi.com/v2/beers"
    makeRequest(url, requestComplete);


}

window.addEventListener('load', app);
