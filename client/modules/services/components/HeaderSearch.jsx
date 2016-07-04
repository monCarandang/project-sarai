import React from 'react';
import classNames from 'classnames';

class HeaderSearch extends React.Component {
  render() {
    const {text} = this.props;
    return (
      <form>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
          <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="sample6">
            <i className="material-icons">search</i>
          </label>
          <div className="mdl-textfield__expandable-holder">
            <input className="mdl-textfield__input" type="text" id="sample6" placeholder={text} />
          </div>
        </div>
      </form>
    );
  }
}

HeaderSearch.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  src: React.PropTypes.string
};

HeaderSearch.defaultProps = {
  text: 'How can we help you?'
};

export default HeaderSearch;
