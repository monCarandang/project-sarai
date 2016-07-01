import React from 'react';
//import highcharts from 'highcharts';
import classNames from 'classnames';

class CropSection extends React.Component {
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
        const {title, img, link} = this.props;
        const style = {
          color: 'black',
          marginLeft: 25
        };
        return (
            <div className='mdl-grid'>
                <div>
                  <img src={`${img}`} /><br />
                  <a href={link} style={style}> {title}</a>
                </div>
            </div>
        );
    }
}

export default CropSection;