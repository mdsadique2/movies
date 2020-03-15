/*

*/
import React, { Component } from 'react';
import { Spin } from 'antd';

import './style.css';

export default class Loader extends Component {
    constructor(props) {
        super(props);
        this.icon = !(props.icon) ? 'loading' : props.icon;
        this.classList = !(props.classList) ? '' : props.classList;
        this.defaultClasses = 'globalLoadingSpinner ' + this.classList
    }

    render() {
        return (
            <div className={this.defaultClasses}>
                <div className="icon">
                    <Spin/>
                </div>
            </div>
        );
    }
}
