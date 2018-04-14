import React, {Component} from 'react';
import axios from 'axios';
import PokeItem from './PokeList';

class PokeList extends Component {

    render() {
        return (
            <div>
                <h1>List of Pokemon</h1>
                {this.props.pokemon.map(p => <PokeItem currentPoke={p.name}/>)}
            </div>                
        )
    }
}

export default PokeList;