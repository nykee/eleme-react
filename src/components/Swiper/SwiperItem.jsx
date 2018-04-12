import React from 'react';
import {Link} from 'react-router'
class SwiperItem extends React.Component {
    render() {
        let container={
            width:'2.8125rem',
            height:'2.8125rem',
            display:'inline-block'
            // textAlign:'center'
            // marginRight:0
        };
        let imgStyle={
            width:'100%',
            height:'100%',
            maxWidth:'100%',
            verticalAlign:'top'
        };
        return (
            <Link to={this.props.linkSrc} style={{color:'#666 !important'}}>
                <ul>
                    <li>
                        <div style={container}><img  style={imgStyle} src={require("../../images/swiper/"+this.props.imgSrc+".jpg")} alt=""/></div>
                    </li>
                    <li>
                        <span>{this.props.itemName}</span>
                    </li>
                </ul>
            </Link>

        )
    }
}

export default SwiperItem;