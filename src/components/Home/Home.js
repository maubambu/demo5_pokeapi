import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import './Home.scss';

const Home = (props) => {
    return (<div>
        <AppBar position="static">
            <Toolbar className="app-bar">
                <h1>Pokedex</h1>
                <Button onClick={()=>props.history.push("/pokemon")} color="inherit">Lista de pokemones</Button>
            </Toolbar>
        </AppBar>
        <h1 className="header">¡Bienvenido a Pokedex!</h1>
    </div>)
}

export default Home;