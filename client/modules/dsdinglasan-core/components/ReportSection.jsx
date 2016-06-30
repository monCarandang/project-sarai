import React from 'react';
//import highcharts from 'highcharts';
import classNames from 'classnames';

class ReportSection extends React.Component {
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

    renderReports() {
    const {reports} = this.props;
    const classGrid = classNames("mdl-cell mdl-cell--4-col");
    return reports.map((report, key) => {
      return (
        <div className={classGrid} key={key}>
          <img src={`${report.img}`} width={375} height= {450} />
          <a href={report.href}>{report.label}</a>
          <p>{report.text}</p>
          <a href={report.mail}>{report.mail}</a>
        </div>
      );
    });
  }

    render() {
        const {title} = this.props;
        const classGrid = classNames("mdl-cell mdl-cell--4-col");
        const marginstyle={
          marginLeft: 30,
          marginRight: 30
        };
        return (
            <div className='mdl-grid' style={marginstyle}>
                <div className={classGrid}>
                  <h3>{title}</h3>
                </div>
                {this.renderReports()}
            </div>
        );
    }
}

export default ReportSection;