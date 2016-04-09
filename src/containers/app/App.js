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
        console.log("this.props.children", this.props.children);
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
