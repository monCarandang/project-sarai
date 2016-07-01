import React from 'react';
import classNames from 'classnames';

class Banner extends React.Component {
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
    const {text, background, title} = this.props;
    /*const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0),
        rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top'
    };*/
    const style = {
        width: '100%',
        height: 'auto'
    };
    return (
      <div>
        <img src={`${background}`} style={style} />
      </div>
    );
  }
}

export default Banner;
