// height === centimeters

let pokemonRepository = (function () {
    let repository = [
      {
        name: "Bulbasaur",
        height: 71,
        types: ["grass", "poison"],
      },
      {
        name: "Charmander",
        height: 61,
        types: ["fire", "flying"],
      },
      {
        name: "Squirtle",
        height: 51,
        types: ["water"],
      },
    ];
  
    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "height" in pokemon &&
        "types" in pokemon
      ) {
        repository.push(pokemon);
      } else {
        console.log("This is not a pokemon");
      }
    }
    function getAll() {
      return repository;
    }
    function addListItem(pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);

      button.addEventListener('click', function(){
        showDetails(pokemon);
      });
    }

    function showDetails(pokemon){
      console.log(pokemon);
    }
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
  })();
  
  pokemonRepository.add({ name: "Pikachu", height: 41, types: ["electric"] });
  
  console.log(pokemonRepository.getAll());
  
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });