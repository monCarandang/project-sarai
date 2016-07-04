import React from 'react';
//import highcharts from 'highcharts';
import classNames from 'classnames';

class MediaSection extends React.Component {
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
        const {video, img, isvideo, mediasubtext, mediasubtextlink} = this.props;
        if(isvideo){
            return (
                <div>
                    <iframe width={575} height={350} src={video} frameBorder={0} allowFullScreen></iframe><br />
                    <a href={mediasubtextlink} className='projlink'><i className='material-icons'>info_outline</i> {mediasubtext} </a>
                </div>
            );
        }
        else{
            return (
                <div>
                    <img src={img} width={575} height={350} />
                    <a href={mediasubtextlink} className='projlink'><i className='material-icons'>info_outline</i> {mediasubtext} </a>
                </div>
            );
        }
    }
}

export default MediaSection;