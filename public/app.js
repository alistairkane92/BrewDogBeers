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

    // createBeerLi(returnNames(beers));
    createBeerAndImage(beers);
}

var createBeerAndImage = function(beers){
    var display = document.getElementById("beer-list");

    for (item of beers){
        var li = document.createElement('li');
        li.innerText = item.name;
        li.classList = "beer-titles"

        //name & image
        var div = document.createElement('div');
        div.classList.add('beer-div')
        div.appendChild(li);
        var img = document.createElement('IMG');
        img.setAttribute('src', item.image_url);
        img.classList.add("beer-image")
        div.appendChild(img);
        display.appendChild(div);

        var tag = document.createElement('li');
        tag.classList.add("tag");
        tag.innerText = item.tagline;
        div.appendChild(tag);

        var ingr = document.createElement('li');
        ingr.classList.add('ingr');


        var ingredientsTxt = document.createElement('li');
        ingredientsTxt.classList.add('ingrtxt')
        ingredientsTxt.innerText = "INGREDIENTS:"
        div.appendChild(ingredientsTxt);

        var ingredientsArray = [];
        //fills array wih 3 ingr
        for(i = 0; i < item.ingredients.malt.length; i++){
            ingredientsArray.push(item.ingredients.malt[i]);
            i++;
        }

        console.log(ingredientsArray);

        for(malt of ingredientsArray){
            var ingrLi = document.createElement('li');
            ingrLi.classList.add('ingrlst');
            ingrLi.innerText += malt.name;
            div.appendChild(ingrLi);
        }

        ingredientsArray = [];
    }
}


var app = function(){
    var url = "https://api.punkapi.com/v2/beers"
    makeRequest(url, requestComplete);


}

window.addEventListener('load', app);
