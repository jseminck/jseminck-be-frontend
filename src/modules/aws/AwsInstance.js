import React from "react";
import FontAwesome from "react-fontawesome";
import classNames from "classnames";

import "./aws.css";

export default class AwsInstance extends React.Component {
    static propTypes = {
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        state: React.PropTypes.string.isRequired,

        // Events
        onStartInstance: React.PropTypes.func.isRequired,
        onStopInstance: React.PropTypes.func.isRequired
    };

    getStateClass() {
        return classNames({
            "aws-grid-cell__status--green": (this.props.state === "running"),
            "aws-grid-cell__status--red": (this.props.state === "stopped"),
            "aws-grid-cell__status--orange": (this.props.state !== "running" && this.props.state !== "stopped")
        });
    }

    toggleInstance() {
        if (this.props.state === "running") {
            this.props.onStopInstance(this.props.id);
        }
        else {
            this.props.onStartInstance(this.props.id);
        }
    }

    render() {
        return (
            <div className="aws-grid-cell">
                <div className="aws-grid-cell__status">
                    <FontAwesome
                        className={this.getStateClass()}
                        name="circle"
                        size="2x"
                    />
                </div>
                <div className="aws-grid-cell__name">
                    {this.props.name}
                </div>
                <div className="aws-grid-cell__action" onClick={::this.toggleInstance}>
                    {this.props.state === "running" && <span>Stop</span>}
                    {this.props.state === "stopped" && <span>Start</span>}
                </div>
            </div>
        );
    }
}
