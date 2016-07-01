import React from 'react';
//import highcharts from 'highcharts';
import classNames from 'classnames';

class SubscribeSection extends React.Component {
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
        const subClass = classNames('mdl-cell mdl-cell--12-col mdl-grid--no-spacing mdl-layout');
        const buttonClass = classNames('mdl-button mdl-js-button mdl-button--raised');
        const {background, icon, title, text, samplename, sampleemail, samplenumber, buttonText, buttonColor} = this.props;

        const style = {
          //backgroundImage: `linear-gradient(rgba(0,0,0,0),  rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${background})`,
          background: `url(${background}), no-repeat, center, center, fixed`,
          // -webkit-background-size: `cover`,
          // -moz-background-size: `cover`,
          // -o-background-size: `cover`,
          backgroundSize: `cover`,
          height: 600,
          color: 'white',
          margin: '0px'
        };

        const buttonStyle={
          backgroundColor: buttonColor,
          width: 305
        };
        const inputStyle={
          backgroundColor: 'white',
          border: '1px solid white',
          borderRadius: 1
        }
        return (
            <div className={subClass} style={style}>
                <img src={`${icon}`} width={100} height={100} />
                <h2>{title}</h2>
                <h6>{text}</h6>
                <form>
                  <div className='mdl-textfield mdl-js-textfield'>
                    <input type="text" placeholder={samplename} className="mdl-textfield__input" style={inputStyle} /><br />
                    <input type="text" placeholder={sampleemail} className="mdl-textfield__input" style={inputStyle} /><br />
                    <input type="number" className="mdl-textfield__input" placeholder={samplenumber} style={inputStyle} /><br /><br />
                    <button className={buttonClass} style={buttonStyle}> {buttonText} </button>
                  </div>
                </form>
            </div>
          );
    }
}

export default SubscribeSection;