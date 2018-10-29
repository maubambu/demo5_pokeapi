import React, { Component } from 'react';
import axios from 'axios';
import './Pokemon.scss';
import PokemonList from './PokemonList/PokemonList';
import PokemonDetail from './PokemonDetail/PokemonDetail';

export default class Pokemon extends Component{
    constructor(props) {
        super(props);
        this.state = {
            pokemonList: [],
            selectedId: null
        }
        this.pokemonAPI = "https://pokeapi.co/api/v2";
    }

    componentDidMount() {
        this.setState({ selectedId: this.props.match.params.id });
        axios.get(`${this.pokemonAPI}/pokemon/`).then(response => {
            let pokemonList = response.data.results.slice(0, 20);
            this.setState({ pokemonList });
        });
    }

    componentWillReceiveProps(props) {
        this.setState({ selectedId: props.match.params.id });
    }

    render() {
        return (
            <div>
                {this.state.selectedId ? <PokemonDetail {...this.props} id={this.state.selectedId}></PokemonDetail> : <PokemonList {...this.props} list={this.state.pokemonList}></PokemonList>}
            </div>
        )
    }
}