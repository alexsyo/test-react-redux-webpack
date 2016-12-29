import React from 'react';
import Test from './Components/Test.js';

class App extends React.Component {

    constructor(props) {

        super(props);
        this.showTest = this.showTest.bind(this);
        this.state = {};
        this.state.var1 = false;

    }

    showTest() {
        this.setState({var1: !this.state.var1});
    }

    render() {

        let test = (!!this.state.var1)
            ? <Test />
            : null;

        return(
            <div>
                <button onClick={this.showTest}>click to show</button>
                {test}
            </div>
        );

    }

}

export default App;