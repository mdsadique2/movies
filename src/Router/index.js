import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import AllVideos from 'Pages/AllVideos'
import Error404 from 'Pages/404'
import App  from 'App/App';
import {appAllowedPaths, defaultPath} from 'AppPath'

export default class RouterComp extends Component {
    redirectTo = function (redirectUrl) {
        return (<Redirect to={'/'+defaultPath} />)
    }

    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" render={this.redirectTo}/>
                        {
                            appAllowedPaths.map((elm, index) => {
                                return <Route key={index} exact path={`/${elm}`} component={AllVideos}/>
                            })
                        }
                        <Route exact path="/404" component={Error404}/>            
                        <Route render={() => {
                            return <Redirect to="/404" />
                        }}
                        />
                    </Switch>
                </ App>
            </Router>
        );
    }
}
