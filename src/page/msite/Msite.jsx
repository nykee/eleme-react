import React from 'react';
import { BackTop} from 'antd'
import Search from '../../components/Search'
import Commend from '../../components/Commend'
import Swiper from '../../components/MySwiper'
import BannerAD from './children/BannerAD'
import Recommend from './children/Recommend'




class msite extends React.Component {
    render() {
        return (
            <div>
                <Search/>
                <Commend></Commend>
                <Swiper></Swiper>
                <BannerAD></BannerAD>
                <div style={{display:'flex',paddingBottom:'0.28rem',height:'0.6rem',width:'100%',background:'#F5F5F5'}}></div>
                <Recommend></Recommend>
                <BackTop></BackTop>
            </div>


        )
    }
}

export default msite;