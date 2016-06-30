import React from 'react';
import classNames from 'classnames';

class BlogCard extends React.Component {
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
    const {img, title, text, link, classList, date, datehref} = this.props;
    const className = classNames('section-card', 'mdl-card', 'mdl-shadow--2dp', classList);
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0),
        rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${img})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top',
      backgroundColor: '#000000',
    };
    return (
      <div className={className}>
        <div
          className="mdl-card__title section-card-title-container"
          style={style}
        >
        </div>
        <div className="mdl-card__supporting-text section-card-text">
          <a href={link}>
              {title}
          </a><br />
          <a href={datehref}>{date}</a>
        </div>
      </div>
    );
  }
}

BlogCard.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  img: React.PropTypes.string,
  link: React.PropTypes.string,
  text: React.PropTypes.string,
  title: React.PropTypes.string
};

BlogCard.defaultProps = {
  classList: [],
  img: '/images/logos/logo1.png',
  link: '',
  text: 'Logo',
  title: 'Title'
};

export default BlogCard;
