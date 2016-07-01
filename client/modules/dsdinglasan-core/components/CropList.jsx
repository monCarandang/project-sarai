import React from 'react';
import classNames from 'classnames';

class CropList extends React.Component {
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
  renderSections() {
    return this.props.sections.map((section, key) => {
      return (
        <div
          className="mdl-cell mdl-cell--2-col section"
          key={key}
        >
          {section}
        </div>
      );
    });
  }
  render() {
    const {spacing, classList} = this.props;
    const noSpacing = 'mdl-grid--no-spacing';
    const className = spacing ? classNames('mdl-grid', 'section-list', classList)
      : classNames('mdl-grid', 'section-list', noSpacing, classList);
    const marginstyle = {
      textAlign: 'center'
    };
    return (
      <div className={className} style={marginstyle}>
        <div className="mdl-cell mdl-cell--1-offset-desktop mdl-cell--10-col-desktop mdl-cell-8-col-tablet mdl-cell--4-col-phone">
          <div className="mdl-grid">
            {this.renderSections()}
          </div>
        </div>
      </div>
    );
  }
}

CropList.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  sections: React.PropTypes.arrayOf(React.PropTypes.element),
  spacing: React.PropTypes.bool
};

CropList.defaultProps = {
  classList: [],
  sections: [],
  spacing: true
};

export default CropList;
