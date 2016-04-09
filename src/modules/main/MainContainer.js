import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as loginActions from "./loginActions";

import logo from './static/logo.png';
import MainLoginForm from './MainLoginForm';

import './main.css';

@connect(
    state => ({ state: state.login }),
    dispatch => bindActionCreators(loginActions, dispatch)
)
export default class MainContainer extends React.Component {
    static propTypes = {
        state: React.PropTypes.object.isRequired,

        onInputChange: React.PropTypes.func.isRequired,
        onLogin: React.PropTypes.func.isRequired
    }

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.state.token) {
            this.context.router.replace("aws");
        }
    }

    onInputChange(field, event) {
        this.props.onInputChange(field, event.target.value);
    }

    onSubmitClick() {
        this.props.onLogin(this.props.state.username, this.props.state.password);
    }

    render() {
        return (
            <div className="container">
                <div className="main">
                    <div className="title">
                        JSEMINCK.BE
                    </div>
                    <img className="logo" src={logo} />

                    <MainLoginForm
                        onInputChange={::this.onInputChange}
                        onSubmitClick={::this.onSubmitClick}
                    />
                </div>
            </div>
        );
    }
}