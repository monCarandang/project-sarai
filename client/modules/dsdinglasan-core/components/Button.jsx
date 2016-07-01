import React from 'react';
//import highcharts from 'highcharts';
import classNames from 'classnames';

class Button extends React.Component {
    componentDidMount() {
        if (componentHandler) {
            componentHandler.upgradeDom();
        }
    }

    componentDidUpdate() {
        if (componentHandler) {
            componentHandler.upgradeDom();
        }
    }

    render() {
        const {text, link, buttoncolor} = this.props;
        const buttonClass = classNames('mdl-button mdl-js-button mdl-button--raised');
        const style={
            backgroundColor: buttoncolor,
            color: 'white'
        };
        return (
            <div className="mdl-layout">
              <button type="button" className={buttonClass} style={style}>{text}</button> 
            </div>
        );
    }
}

export default Button;