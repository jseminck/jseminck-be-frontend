import * as requests from "./../../utils/requests";

export function onLoadData() {
    return (dispatch) => {
        dispatch(onLoading());

        return requests.get("/api/aws")
            .then(response => response.json())
            .then(json => {
                dispatch(onDataSuccess(json));
            }
        );
    };
}

function onLoading() {
    return {
        type: "ON_LOADING"
    };
}

function onDataSuccess(data) {
    return {
        type: "ON_DATA_SUCCESS",
        data
    };
}

export function onStartInstance(id) {
    return (dispatch) => {
        dispatch(onLoading());

        return requests.post("/api/aws/start", {id})
            .then(dispatch(onInstanceStarted(id)));
    };
}

function onInstanceStarted(id) {
    return {
        type: "ON_INSTANCE_STARTED",
        id
    };
}

export function onStopInstance(id) {
    return (dispatch) => {
        dispatch(onLoading());

        return requests.post("/api/aws/stop", {id})
            .then(dispatch(onInstanceStopped(id)));
    };
}

function onInstanceStopped(id) {
    return {
        type: "ON_INSTANCE_STOPPED",
        id
    };
}