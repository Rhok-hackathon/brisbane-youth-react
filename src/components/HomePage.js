import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class HomePage extends Component {
    render () {
        return (
            <Fragment>
                <h1>Hello World</h1>
                {/* Favorite Food: <FontAwesomeIcon icon="fa-bullhorn" /> */}
                <i class="fas fa-bullhorn"></i>
            </Fragment>
        )
    }
}

export default HomePage;