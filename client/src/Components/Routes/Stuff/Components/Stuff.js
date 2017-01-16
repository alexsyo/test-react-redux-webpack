import React from 'react';

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
                <button onClick={this.showTest}>click to show</button>
                {this.state.test}
            </div>
        );

    }

}

export default Stuff;