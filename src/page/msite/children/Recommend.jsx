import React from 'react';
import '../../../style/Recommend.css'

class Recommend extends React.Component {

    render() {
        let shopLists =[
            { shopName: '1', sellPerMonth: 1111,},
            { shopName: '2', sellPerMonth: 2222},
            { shopName: '3', sellPerMonth: 1111},
            {shopName: '4', sellPerMonth: 111},
            {shopName: '4', sellPerMonth: 111},
            {shopName: '4', sellPerMonth: 111},
            {shopName: '4', sellPerMonth: 111},
            {shopName: '4', sellPerMonth: 111},
            {shopName: '4', sellPerMonth: 111},
            {shopName: '4', sellPerMonth: 111},
            {shopName: '4', sellPerMonth: 111},
            {shopName: '4', sellPerMonth: 111},
            ];
        return (
            <div style={{background:'#fff'}}>
                <div className="shopList-title"> 推荐商家 </div>
                <div id="shopList">
                    {
                        shopLists.map((shop)=>{
                           return(
                               <div>
                                   <div>店名：{shop.shopName}</div>
                                   <div>月售：{shop.sellPerMonth}</div>
                               </div>
                           )
                        })
                    }
                </div>
            </div>

        )
    }
}

export default Recommend;