
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import StorePiker from './StorePiker';
import App from './App';
import NotFound from './NotFound';


const Router = (props) => {
    return (
        <React.Fragment>

            <BrowserRouter>

                <Switch>
                    
                    <Route exact path='/' component={StorePiker} />
                    <Route exact path='/store/:storeId' component={App} />
                    <Route exact  component={NotFound} />

                </Switch>

            </BrowserRouter>

        </React.Fragment>
    );
}

export default Router;