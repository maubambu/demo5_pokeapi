import React from 'react';
import Card from '@material-ui/core/Card';

const PokemonList = (props) => {
    const pathImages = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    let pokemonList = props.list.map((pokemon, index) => {
        return (
            <Card onClick={() => props.history.push(`/pokemon/${index + 1}`)} key={index} className="pokemon">
                <img alt="" src={`${pathImages}/${index + 1}.png`}></img>
                <p>{pokemon.name}</p>
            </Card>
        )
    });
    return (
        <div className="pokemon-list">
            {pokemonList}
        </div>
    )
}

export default PokemonList;