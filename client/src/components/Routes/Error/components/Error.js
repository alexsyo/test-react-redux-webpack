import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as errorActions from 'redux/actions/errorActions'; 

class Error extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {

        return(
            <div>
                <p>404, not found.</p>
                <button onClick={this.props.pirateError}>Blame a pirate</button>
                <button onClick={this.props.poshError}>Blame a gentleman</button>
                <p>check the console ;)</p>
            </div>
        );

    }

}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        pirateError: errorActions.pirate,
        poshError: errorActions.posh
    }, dispatch);

};

export default connect(null, mapDispatchToProps)(Error);