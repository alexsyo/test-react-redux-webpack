import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as resourcesActions from 'redux/actions/resourcesActions';
import * as populationActions from 'redux/actions/populationActions';

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


    render() {

        return(
            <div>
                <p>Godd stuff...</p>
                <button onClick={this.props.store.bind(this, 'food')}>Gather Food</button>
                <button onClick={this.props.store.bind(this, 'wood')}>Gather Wood</button>
                <button onClick={this.props.store.bind(this, 'stone')}>Gather Stone</button>
                <button onClick={this.showTest}>Say Hi!</button>
                {this.state.test}
            </div>
        );

    }

}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({ 
        store: resourcesActions.store
    }, dispatch);

};

export default connect(null, mapDispatchToProps)(Stuff);