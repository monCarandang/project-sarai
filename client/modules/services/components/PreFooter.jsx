import React from 'react';
//import highcharts from 'highcharts';
import classNames from 'classnames';

class PreFooter extends React.Component {
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

    renderNav(){
        const {prevName, prevLink, nextName, nextLink, isFirst, isLast} = this.props;
        const style={
            textAlign: 'right'
        };
        const style2={
            textAlign: 'left'
        };
        if(isFirst==false && isLast == false){
            return (
                <div className='mdl-grid'>
                    <div className='mdl-cell mdl-cell--4-col' style={style2}>
                        <a href={prevLink} className='navClass'><h5><i className='material-icons'>navigate_before</i>{prevName}</h5></a>
                    </div>
                    <div className='mdl-layout-spacer'></div>
                    <div className='mdl-cell mdl-cell--4-col' style={style}>
                        <a href={nextLink} className='navClass'><h5>{nextName}<i className='material-icons'>navigate_next</i></h5></a>                    
                    </div>
                </div>
            );
        }
        else{
            if(isFirst){
                return (
                    <div className='mdl-grid'>
                        <div className='mdl-layout-spacer'></div>
                        <div className='mdl-cell mdl-cell--4-col' style={style}>
                            <a href={nextLink} className='navClass'><h5>{nextName}<i className='material-icons'>navigate_next</i></h5></a>                    
                        </div>
                    </div>
                );
            }
            else{
                return (
                    <div className='mdl-grid'>
                        <div className='mdl-cell mdl-cell--4-col' style={style2}>
                            <a href={prevLink} className='navClass'><h5><i className='material-icons'>navigate_before</i>{prevName}</h5></a>
                        </div>
                    </div>
                );
            }
        }
    }

    renderShare() {
      const {share} = this.props;
      return share.map((each, key) => {
        return (
            <li>
                <a
                href={each.href}
                className={each.class_name}
                title={each.title}
                key={key}>
                </a>
            </li>
        );
      });
    }

    render() {
        
        return (
            <div>
                <hr />
                <ul className="social clearfix">
                <span>{'Share: '}</span>
                    {this.renderShare()}
                </ul>
                <hr />
                {this.renderNav()}
            </div>
        );
    }
}

export default PreFooter;