import _ from 'lodash';

const initialState = {
    loading: false,
    instances: []
};

export default function counter(state = initialState, action = {}) {
    switch (action.type) {
    case "ON_LOADING":
        return onLoading(state);
    case "ON_DATA_SUCCESS":
        return onDataSuccess(state, action.data);
    case "ON_INSTANCE_STARTED":
        return onInstanceStarted(state, action.id);
    case "ON_INSTANCE_STOPPED":
        return onInstanceStopped(state, action.id);
    default:
        return state;
    }
}

function onLoading(state) {
    return {
        ...state,
        loading: true
    };
}

function onDataSuccess(state, instances) {
    return {
        ...state,
        loading: false,
        instances
    };
}

function onInstanceStarted(state, id) {
    getInstanceFromState(state, id).state = "starting";

    return {
        ...state
    };
}

function onInstanceStopped(state, id) {
    getInstanceFromState(state, id).state = "stopping";

    return {
        ...state
    };
}

function getInstanceFromState(state, id) {
    return _(state.instances).filter(instance => instance.id === id).first();
}