// height = centimeters

var pokemonList = []

    pokemonList.push({name: 'Bulbasaur', height: 71, type: ['grass' , 'poison']});
    pokemonList.push({name: 'Charmander', height: 61, type: 'fire'});
    pokemonList.push({name: 'Squirtle', height: 51, type: 'water'});

for (let i = 0; i < pokemonList.length; i++){
    var item = pokemonList[i];
    console.log(item.name + ' - height: ' + item.height);
    document.write(pokemonList[i]);
}