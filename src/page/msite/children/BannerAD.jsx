import React from 'react';
import {ScreenAPI} from '../../../util/ScreenAPI'

class BannerAD extends React.Component {

    render() {
        let clientWidth =ScreenAPI.getClientWidth();
        // console.log(clientWidth);
        return (
            <div style={{padding:'0.4rem',background:'#fff'}}><img  style={{width:'auto',height:'auto',maxWidth:'100%'}} src={require('../../../images/new.png')} alt=""/></div>

        )
    }
}

export default BannerAD;