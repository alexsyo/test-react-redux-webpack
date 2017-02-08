import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavBar from './components/NavBar.js';
import ResourcesList from './components/ResourcesList.js';

class App extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {

        let path = this.props.location.pathname;
        let segment = path.split('/')[1] || 'root';

        return(

            <div>
                <NavBar />
                <ResourcesList />
                <ReactCSSTransitionGroup
                    id="routesWrapper"
                    component="div"
                    transitionName="route"
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={600}>
                    {React.cloneElement(this.props.children, { key: segment })}
                </ReactCSSTransitionGroup>
            </div>

        );

    }

}

export default App;