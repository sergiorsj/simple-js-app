// height = centimeters

var pokemonList = []

    pokemonList.push({name: 'Bulbasaur', height: 71, type: ['grass' , 'poison']});
    pokemonList.push({name: 'Charmander', height: 61, type: 'fire'});
    pokemonList.push({name: 'Squirtle', height: 51, type: 'water'});

//for (let i = 0; i < pokemonList.length; i++){
//    var item = pokemonList[i];
//    document.write(pokemonList[i].name + ' height: ' + pokemonList[i].height + '<br>');
//}

// part 1 exerc 1.5 - forEach() Loops

pokemonList.forEach(pokemon => {
    console.log('name: ${pokemon.name}, height: ${pokemon.height}, type: ${pokemon.type}');
});

// const heightThreshold = 70;

//for (let i=0; i < pokemonList.length; i++) {
//    var pokemonString = pokemonList[i].name + " height: " + pokemonList[i].height + "-";
//    if (pokemonList[i].height > heightThreshold) {
//        pokemonString += " Wow, that is big!";
//    }
//    document.write(pokemonString + "<br>");
//}

var pokemonRepository = (()=> {
    let pokemonList = [];

    function getAll() {
        return pokemonList;
    }

function add(item) {
    if(typeof item === 'object' && item !== null) {
        pokemonList.push(item);
    } else {
        console.error('Pokemon incorrect');
    }
}

return {
    getAll: getAll,
    add: add
};
})();

pokemonRepository.add({name: 'Pikachu', height: 31, type: 'electric'});

pokemonRepository.getAll().forEach(pokemon => {
    console.log('name: ${pokemon.name}, height: ${pokemon.height}, type: ${pokemon.type}');
});