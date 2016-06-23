import React from 'react';
//import highcharts from 'highcharts';
import classNames from 'classnames';

class WeatherSection extends React.Component {
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
        const {title, text, mapUrl, rainfallchartUrl} = this.props;
        return (
            <div className='mdl-grid'>
                <div className="mdl-layout">
                  <h3>{title}</h3>
                  <h6>{text}</h6>
                  <div>
                      <img src={`${mapUrl}`} width={550} height= {400} />
                      <img src={`${rainfallchartUrl}`} width={600} height= {400} />
                  </div>
                </div>
            </div>
        );
    }
}

export default WeatherSection;