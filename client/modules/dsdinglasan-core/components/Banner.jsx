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
    const {text, img} = this.props;
    /*const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0),
        rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${img})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top'
    };*/
    const style = {
        width: 1250,
        height: 500
    };
    return (
      <div>
        <img src={`${img}`} style={style} />
      </div>
    );
  }
}

export default Banner;
