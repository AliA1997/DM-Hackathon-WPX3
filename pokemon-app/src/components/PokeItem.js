import axios from 'axios';
import React, {Component} from 'react';

class PokeItem extends Component {

    render() {
     return (
        <div>
            <h1>{this.props.name}</h1>
        </div>
     );
    }
}

export default PokeItem;