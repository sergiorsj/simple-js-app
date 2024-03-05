// height = centimeters

var pokemonList = []

    pokemonList.push({name: 'Bulbasaur', height: 71, type: ['grass' , 'poison']});
    pokemonList.push({name: 'Charmander', height: 61, type: 'fire'});
    pokemonList.push({name: 'Squirtle', height: 51, type: 'water'});

for (let i = 0; i < pokemonList.length; i++){
    var item = pokemonList[i];
    document.write(pokemonList[i].name + ' height: ' + pokemonList[i].height + '<br>');
}

const heightThreshold = 70;

for (let i=0; i < pokemonList.length; i++) {
    var pokemonString = pokemonList[i].name + " height: " + pokemonList[i].height + "-";
    if (pokemonList[i].height > heightThreshold) {
        pokemonString += " Wow, that is big!";
    }
    document.write(pokemonString + "<br>");
}