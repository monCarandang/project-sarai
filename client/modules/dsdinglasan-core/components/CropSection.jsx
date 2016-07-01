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
        const cropSectionStyle = {
            textAlign: 'center'
        }
        const linkStyle = {
          color: 'black',
          textDecoration: 'none'
        };
        return (
            <div style={cropSectionStyle}>
              <img src={`${img}`} /><br />
              <a href={link} style={linkStyle}> {title}</a>
            </div>
        );
    }
}

export default CropSection;