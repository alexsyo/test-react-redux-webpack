import React from 'react';
import * as resourcesActions from 'redux/actions/resourcesActions';
import * as apiActions from 'redux/actions/apiActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Friends extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {

        let friends;

        if(this.props.api.isFetching) {

            friends = 'calling...';

        } else if (this.props.api.data) {

            let n = (this.props.api.data.length > 0)
                ? 'cool!'
                : 'how sad...';

            friends = `you found ${this.props.api.data.length} friends, ${n}`;

        }else if (this.props.api.error) {

            friends = 'friends were not reachable :(';

        } else {

            friends = 'call friends!!';

        }

        return(
            <div>
                <p>...are awsome!</p>
                <button onClick={this.props.consume.bind(this, 'food')}>Consume Food</button>
                <button onClick={this.props.consume.bind(this, 'wood')}>Consume Wood</button>
                <button onClick={this.props.consume.bind(this, 'stone')}>Consume Stone</button>
                <button onClick={this.props.call.bind(this, 'http://rest.learncode.academy/api/western/users')}>Call</button>
                <button onClick={this.props.call.bind(this, 'blah')}>Simulate</button>
                <p>{friends}</p>
            </div>
        );

    }

}

const mapStateToProps = (state) => {

    return { api: state.api }

}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({ 
        consume: resourcesActions.consume,
        call: apiActions.fetch,
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);