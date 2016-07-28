import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
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
    event.preventDefault()
    const username = ReactDOM.findDOMNode(this.refs.username).value.trim()
    const password = ReactDOM.findDOMNode(this.refs.password).value

    // console.log(`Logging in... user: ${username} password: ${password}`)

    this.props.callback(username, password)
  }

  render() {
    const style = {
      textAlign: 'center'
    }

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col-desktop" style={style}>

          <form onSubmit={this.handleSubmit}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="username" ref="username"/>
              <label className="mdl-textfield__label" htmlFor="sample3">Username</label>
            </div>
            <br /> <br />
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="password" id="password" ref="password"/>
              <label className="mdl-textfield__label" htmlFor="sample3">Password</label>
            </div>

            <br /><br />
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
