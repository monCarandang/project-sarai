import React from 'react';
import classNames from 'classnames';

class CropSection extends React.Component {

  componentDidMount() {//document.ready
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    console.log('hello');

  }
  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }

  render() {

    const {img, title, link} = this.props;

    return(
     <div>
          {img} {title} {link}
     </div>
      );
  }
}

export default CropSection;