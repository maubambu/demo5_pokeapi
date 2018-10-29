import React, {Component} from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import './PokemonDetail.scss';

export default class PokemonDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemon: null
        }
        this.pokemonAPI = "https://pokeapi.co/api/v2";
        this.pokemonImagesAPI = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
    }

    componentDidMount() {
        axios.get(`${this.pokemonAPI}/pokemon/${this.props.id}/`, this.config).then(response => {
            this.setState({ pokemon: response.data });
            console.log(response.data)
        }).catch(error => {
            console.error(error)
        })
    }

    render() {
        return (
            <div>
                {this.state.pokemon ?
                    <div>
                        <button onClick={() => this.props.history.push("/pokemon")}>Regresar a lista</button>
                        <Card className="pokemon-detail">
                            <img alt="" src={`${this.pokemonImagesAPI}/${this.state.pokemon.id}.png`}></img>
                            <h1>{this.state.pokemon.name}</h1>
                            <p>{this.state.pokemon.weight} libras</p>
                            <p>{this.state.pokemon.height} cms</p>
                        </Card>
                    </div>
                    : <h1>Cargando pokemon</h1>
                }
            </div>
        )
    }

    
}
