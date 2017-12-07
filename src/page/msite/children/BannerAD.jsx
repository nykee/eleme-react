import React from 'react';


class BannerAD extends React.Component {
    render() {
        return (
            <div style={{padding:'0.4rem',background:'#fff'}}><img  style={{width:'22rem',height:'5.3rem',maxWidth:'100%'}} src={require('../../../images/new.png')} alt=""/></div>

        )
    }
}

export default BannerAD;