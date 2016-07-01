import React from 'react';

class AdminHomepage extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
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

  handleSubmit(event) {
    // this.props.callback()
  }

  render() {
    return (
      <div>
        Homepage options go here
      </div>
    );
  }
}

export default AdminHomepage;
