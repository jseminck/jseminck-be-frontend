import * as requests from "./../../utils/requests";

export function onInputChange(field, value) {
    return {
        type: "ON_INPUT_CHANGE",
        field,
        value
    };
}

export function onLogin(username, password) {
    return (dispatch) => {
        dispatch(onLoading());

        return requests.post("/api/login", {username, password})
            .then(response => response.json())
            .then(json => dispatch(onLoginSuccess(json.token)));
    };
}

function onLoading() {
    return {
        type: "ON_LOADING"
    };
}

function onLoginSuccess(token) {
    return {
        type: "ON_LOGIN_SUCCESS",
        token
    };
}