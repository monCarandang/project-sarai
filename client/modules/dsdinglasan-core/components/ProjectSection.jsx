import React from 'react';
//import highcharts from 'highcharts';
import classNames from 'classnames';

class ProjectSection extends React.Component {
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
        const {title, img, link, text} = this.props;
        const style = {
          color: 'gray'
        };
        return (
            <div className='mdl-grid'>
                <div>
                  <img src={`${img}`} width={375} height={250} /><br />
                  <h6><a href={link} style={style}> {title}</a></h6>
                  {text}
                </div>
            </div>
        );
    }
}

export default ProjectSection;