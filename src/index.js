import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import 'Style/funcssion.css';
import 'Style/style-utils.css';
import 'Style/style.css';
import 'Style/antCssOverrides.css'

import * as serviceWorker from './serviceWorker';
import RouterComp  from 'Router';
import store from 'Store'


const appIndexComponent = function () {
    return (
        <Provider store={store}>
            <RouterComp/>
        </Provider>
    )
}


ReactDOM.render(appIndexComponent(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
