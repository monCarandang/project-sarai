import React from 'react';
//import highcharts from 'highcharts';
import classNames from 'classnames';

class Paragraph extends React.Component {
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
        const {title, text} = this.props;
        if(title!=''){
            return (
                <div>
                    <h4>{title}</h4>
                    <hr className='hrGreen'/>
                    <p>{text}</p>
                </div>
            );
        }
        else{
            return(
                <div>
                </div>
            );
        }
    }
}

export default Paragraph;