import React from 'react';
//import highcharts from 'highcharts';
import classNames from 'classnames';

class Paragraph extends React.Component {
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
        const {title, text} = this.props;
        return (
            <div>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        );
    }
}

export default Paragraph;