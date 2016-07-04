import React from 'react';
//import highcharts from 'highcharts';
import classNames from 'classnames';

class LeftSection extends React.Component {
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

    renderText(list){
        return list.map((each, key) => {
          return (
            <span key={key}>
              {each.label}<br />
            </span>
          );
        });
    }

    renderInfo() {
      const {info} = this.props;
      return info.map((each, key) => {
        return (
          <p key={key}>
            {each.name}<br />
            {this.renderText(each.text)}
          </p>
        );
      });
    }

    render() {
        const {text} = this.props;
        return (
            <div>
                <h3>{text}</h3>
                <div>
                  {this.renderInfo()}
                </div>
            </div>
        );
    }
}

export default LeftSection;