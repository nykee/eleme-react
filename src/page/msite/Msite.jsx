import React from 'react';
import Search from '../../components/Search'
import Commend from '../../components/Commend'
import Swiper from '../../components/MySwiper'


class msite extends React.Component {
    render() {
        return (
            <div>
                <Search/>
                <Commend></Commend>
                <Swiper></Swiper>
            </div>


        )
    }
}

export default msite;