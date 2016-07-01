import React from 'react';
//import highcharts from 'highcharts';
import classNames from 'classnames';

class TitleSection extends React.Component {
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
            <div className='mdl-grid'>
                <div>
                  <h3>{title}</h3>
                  <h6>{text}</h6>
                </div>
            </div>
        );
    }
}

export default TitleSection;