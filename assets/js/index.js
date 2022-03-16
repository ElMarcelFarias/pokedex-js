
const listagemPokemon = document.querySelectorAll('.pokemon');
const cartoesPokemon = document.querySelectorAll('.cartoes-pokemon');

listagemPokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        
        document.querySelector('.aberto').classList.remove('aberto');

        const idListagemPokemon = pokemon.attributes.id.value;
        const idCartaoAbrir = 'cartao-' + idListagemPokemon;
        const cartaoPokemonAbrir = document.getElementById(idCartaoAbrir);
        cartaoPokemonAbrir.classList.add('aberto');

        //Primeiro removendo a classe ativo, para depois adicionar ao evento de click
        document.querySelector('.ativo').classList.remove('ativo'); 
        document.getElementById(idListagemPokemon).classList.add('ativo');
    });
});