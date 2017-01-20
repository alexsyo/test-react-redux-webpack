import React from 'react';
import NavBar from './Components/NavBar.js';
import ResourcesList from './Components/ResourcesList.js';

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