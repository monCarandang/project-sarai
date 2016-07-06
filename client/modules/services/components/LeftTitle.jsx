import React from 'react';
import classNames from 'classnames';

class LeftTitle extends React.Component {
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
        const {title} = this.props;
        const style = {
            color: '#59B060'
        }
        return (
            <div>
                <hr />
                <h2 style={style}>{title}</h2>
                <hr />
            </div>
        );
    }
}

export default LeftTitle;