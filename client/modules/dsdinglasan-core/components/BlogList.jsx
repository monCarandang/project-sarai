import React from 'react';
import classNames from 'classnames';

class BlogList extends React.Component {
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
          className="mdl-cell mdl-cell--12-col section"
          key={key}
        >
          {section}
        </div>
      );
    });
  }
  render() {
    const {spacing, classList, title, text} = this.props;
    const noSpacing = 'mdl-grid--no-spacing';
    console.log(spacing);
    const className = spacing ? classNames('mdl-grid', 'section-list', classList)
      : classNames('mdl-grid', 'section-list', noSpacing, classList);
    const marginstyle = {
      marginLeft: 30,
      marginRight: 30
    };
    return (
      <div className={className} style={marginstyle}>
        <div>
          <h3>{title}</h3>
          <h6>{text}</h6>
        </div>
        {this.renderSections()}
      </div>
    );
  }
}

BlogList.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  sections: React.PropTypes.arrayOf(React.PropTypes.element),
  spacing: React.PropTypes.bool
};

BlogList.defaultProps = {
  classList: [],
  sections: [],
  spacing: true
};

export default BlogList;
