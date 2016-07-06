import React from 'react';
import classNames from 'classnames';

class ServicesPage extends React.Component {
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
    const {appBar, title, info, media, paragraph1, paragraph2, pre_footer, classList, footer} = this.props;
    const className = classNames('landing', classList);
    const style = {
      marginLeft: 50,
      marginRight: 50
    };
    return (
      <div className={className}>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          {appBar}
          <main className="mdl-layout__content">
            <div className='mdl-grid' style={style}>
              <div className='mdl-cell mdl-cell--12-col'>
                {title}
              </div>
              <div className='mdl-cell mdl-cell--6-col'>
                {info}
              </div>
              <div className='mdl-cell mdl-cell--6-col'>
                {media}
              </div>
              <div className='mdl-cell mdl-cell--5-col'>
                {paragraph1}
              </div>
              <div className='mdl-cell mdl-cell--7-col'>
                {paragraph2}
              </div>
              <div className='mdl-cell mdl-cell--12-col'>
                {pre_footer}
              </div>
            </div>
            {footer}
          </main>
        </div>
      </div>
    );
  }
}

ServicesPage.propTypes = {
  appBar: React.PropTypes.element,
  title: React.PropTypes.element,
  info: React.PropTypes.element,
  media: React.PropTypes.element,
  paragraph1: React.PropTypes.element,
  paragraph2: React.PropTypes.element,
  pre_footer: React.PropTypes.element,
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  footer: React.PropTypes.element
};

ServicesPage.defaultProps = {
  appBar: null,
  title: null,
  info: null,
  media: null,
  paragraph1: null,
  paragraph2: null,
  pre_footer: null,
  classList: [],
  footer: null
};

export default ServicesPage;
