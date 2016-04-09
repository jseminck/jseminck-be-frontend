import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './containers/app/App';
import Main from './modules/main/MainContainer';
import Aws from './modules/aws/AwsContainer';

export default () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Main} />
                <Route path="/aws" component={Aws} />
            </Route>
        </Router>
    );
};