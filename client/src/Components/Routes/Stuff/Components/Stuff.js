import React from 'react';
import Store from './../../../../Redux/Store.js';

class Stuff extends React.Component {

    constructor(props) {

        super(props);
        this.showTest = this.showTest.bind(this);
        this.state = {};
        this.state.var1 = false;
        this.state.test = null;

    }

    showTest() {

        this.state.var1 = !this.state.var1;

        if (!!this.state.var1) {

            require.ensure([], () => {

                let Test = require('./Test.js').default;
                this.setState({test: <Test />});

            }, 'Test');

        } else {

            this.setState({test: null});

        }

    }

    gather(resource) {

        Store.dispatch({ type: 'STORE', resource });
        Store.dispatch({ type: 'INCREASE' });

    }

    render() {

        return(
            <div>
                <p>Godd stuff...</p>
                <button onClick={this.gather.bind(null, 'food')}>Gather Food</button>
                <button onClick={this.gather.bind(null, 'wood')}>Gather Wood</button>
                <button onClick={this.gather.bind(null, 'stone')}>Gather Stone</button>
                <button onClick={this.showTest}>Say Hi!</button>
                {this.state.test}
            </div>
        );

    }

}

export default Stuff;