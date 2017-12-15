import React from 'react';
import { BackTop} from 'antd'
import Search from '../../components/MSiteSearch'
import Commend from '../../components/Commend'
import Swiper from '../../components/MySwiper'
import BannerAD from './children/BannerAD'
import Recommend from './children/Recommend'




class msite extends React.Component {
    render() {
        return (
            <div>
                <Search/>
                <Commend/>
                <Swiper>/</Swiper>
                <BannerAD/>
                <div style={{display:'flex',paddingBottom:'0.28rem',height:'0.6rem',width:'100%',background:'#F5F5F5'}}></div>
                <Recommend/>
                <BackTop/>
            </div>


        )
    }
}

export default msite;