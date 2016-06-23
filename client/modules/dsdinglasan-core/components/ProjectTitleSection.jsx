import React from 'react';
//import highcharts from 'highcharts';
import classNames from 'classnames';

class ProjectTitleSection extends React.Component {
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
        const {title, text, subtext} = this.props;
        return (
            <div className='mdl-grid'>
                <div className="mdl-layout">
                  <h3>{title}</h3>
                  <h6>{text}</h6>
                  <h6>{subtext}</h6>
                </div>
            </div>
        );
    }
}

export default ProjectTitleSection;