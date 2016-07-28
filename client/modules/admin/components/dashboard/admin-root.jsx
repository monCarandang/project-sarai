import React from 'react';

class AdminRoot extends React.Component {
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
    const style = {
      textAlign: 'center'
    }
    return (
      <div>
        Admin Root goes here
      </div>
    );
  }
}

export default AdminRoot;
