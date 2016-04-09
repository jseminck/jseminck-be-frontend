import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import login from './../modules/main/loginReducer';
import aws from './../modules/aws/awsReducer';

const logger = createLogger();
const reducer = combineReducers({
    login,
    aws
});

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware,logger)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(reducer, initialState);
}
