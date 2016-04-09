import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as awsActions from "./awsActions";
import "./aws.css";

import AwsInstance from "./AwsInstance";

class AwsContainer extends React.Component {
    static propTypes = {
        state: React.PropTypes.object.isRequired,

        // Events
        onLoadData: React.PropTypes.func.isRequired,
        onStartInstance: React.PropTypes.func.isRequired,
        onStopInstance: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.updateInstances();

        setInterval(this.updateInstances.bind(this), (10 * 1000));
    }

    updateInstances() {
        this.props.onLoadData();
    }

    render() {
        return (
            <div className="aws-grid">
                {this.props.state.instances.map((instance, index) => {
                    return (
                        <AwsInstance
                            key={index}
                            {...instance}
                            onStartInstance={this.props.onStartInstance}
                            onStopInstance={this.props.onStopInstance}
                        />
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state.aws
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(awsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AwsContainer);
