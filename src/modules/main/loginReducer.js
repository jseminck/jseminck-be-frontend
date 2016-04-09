const initialState = {
    username: "",
    password: "",
    isLoading: false,
    token: ""
};

export default function loginReduer(state = initialState, action) {
    switch(action.type) {
    case "ON_INPUT_CHANGE":
        return onInputChange(state, action.field, action.value);
    case "ON_LOADING":
        return onLoading(state);
    case "ON_LOGIN_SUCCESS":
        return onLoginSuccess(state, action.token);
    }

    return state;
}

function onInputChange(state, field, value) {
    return {
        ...state,
        [field]: value
    };
}

function onLoading(state) {
    return {
        ...state,
        isLoading: true
    }
}

function onLoginSuccess(state, token) {
    return {
        ...state,
        isLoading: false,
        token
    }
}