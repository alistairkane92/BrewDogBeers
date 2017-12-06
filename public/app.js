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

    displayBeers(beers);
}

var displayBeers = function(beers){
    var display = document.getElementById("beer-list");

    for (beer of beers){
        var newItem = document.createElement("li");
        newItem.innerText = beer.name;
        display.appendChild(newItem);
    }
}

var app = function(){
    var url = "https://api.punkapi.com/v2/beers"
    makeRequest(url, requestComplete);


}

window.addEventListener('load', app);
