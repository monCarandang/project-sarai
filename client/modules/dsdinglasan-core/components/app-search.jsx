import React from 'react';
import classNames from 'classnames';

class AppSearch extends React.Component {
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
    const {search, classList} = this.props;
    const className = classNames('mdl-layout-title', 'app-title', 'mdl-navigation__link', classList);
    const style = {
      color: '#333333',
      fontSize: 20,
      fontWeight: 'bold'
    };
    return (
      <div className={className} style={style}>
          {search}
      </div>
    );
  }
}

AppSearch.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  title: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ])
};

AppSearch.defaultProps = {
  classList: [],
  search: 'search'
};

export default AppSearch;
