import React from 'react';
import './app.css';

export default class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.object.isRequired
    };

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
