import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import TabsComponent from './Components/TabsComponent'
import App from './App';

class RouterDefinition extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" component={App} exact />
                        <Route path="/home" component={TabsComponent} exact />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default RouterDefinition;