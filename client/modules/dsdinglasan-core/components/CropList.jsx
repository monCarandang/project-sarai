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
      marginLeft: 30,
      marginRight: 30
    };
    return (
      <div className={className} style={marginstyle}>
        {this.renderSections()}
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
