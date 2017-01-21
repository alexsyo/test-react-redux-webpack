import React from 'react';
import { connect } from 'react-redux';

class ResourcesList extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {

        return(
            <ul>
                <li>
                    <p>Food: {this.props.resources.food}</p>
                </li>
                <li>
                    <p>Wood: {this.props.resources.wood}</p>
                </li>
                <li>
                    <p>Stone: {this.props.resources.stone}</p>
                </li>
            </ul>
        );

    }

}

const mapStateToProps = (state) => {

    return { resources: state.resources};

} 

export default connect(mapStateToProps, null)(ResourcesList);