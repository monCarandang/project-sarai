import React from 'react';
//import highcharts from 'highcharts';
import classNames from 'classnames';

class QuotesSection extends React.Component {
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

    renderQuotes() {
      const {quotes} = this.props;
        return (
          <div className="mdl-cell mdl-cell--5-col">         
            <h4>{quotes[0].text}</h4>
            <br />
            {quotes[0].author} {'|'} {quotes[0].authorInfo}
          </div>
        );
  }

    render() {
        const {title, text, img, author} = this.props;
        const marginstyle={
          marginLeft: 30,
          marginRight: 30
        };
        return (
            <div className='mdl-grid' style={marginstyle}>
              <div className="mdl-cell mdl-cell--12-col">
              <h3>{title}</h3>
              </div>
                {this.renderQuotes()}
                <div className="mdl-cell mdl-cell--3-col">
                  <img src={`${img}`} width={280} height={350} />
                </div>
                <div className="mdl-cell mdl-cell--4-col">
                  <h3>{text}</h3>
                  {author}
                </div>
            </div>
        );
    }
}

export default QuotesSection;