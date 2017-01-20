import React from 'react';
import ResourcesStore from './../../../../Redux/Store.js';

class Friends extends React.Component {

    constructor(props) {

        super(props);

    }

    consume(resource) {

        ResourcesStore.dispatch({ type: 'CONSUME', resource });

    }

    render() {

        return(
            <div>
                <p>...are awsome!</p>
                <button onClick={this.consume.bind(null, 'food')}>Consume Food</button>
                <button onClick={this.consume.bind(null, 'wood')}>Consume Wood</button>
                <button onClick={this.consume.bind(null, 'stone')}>Consume Stone</button>
            </div>
        );

    }

}

export default Friends;