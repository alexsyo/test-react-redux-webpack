import React from 'react';

class ResourcesList extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {

        return(
            <ul>
                <li>
                    <p>Food: 0</p>
                </li>
                <li>
                    <p>Wood: 0</p>
                </li>
                <li>
                    <p>Stone: 0</p>
                </li>
            </ul>
        );

    }

}

export default ResourcesList;