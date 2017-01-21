import React from 'react';
import NavBar from './components/NavBar.js';
import ResourcesList from './components/ResourcesList.js';

class App extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {

        return(
            <div>
                <NavBar />
                <ResourcesList />
                {this.props.children}
            </div>
        );

    }

}

export default App;