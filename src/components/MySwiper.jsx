import React from 'react';
import {Row,Col} from 'antd'
// import ReactSwipes from 'react-swipes'
class MySwiper extends React.Component {
    constructor(){
        super();
    }


    render() {
        /*let opt = {
            distance: 230, // 每次移动的距离，卡片的真实宽度，需要计算
            currentPoint: 1,// 初始位置，默认从0即第一个元素开始
            swTouchend: (ev) => {
                let data = {
                    moved: ev.moved,
                    originalPoint: ev.originalPoint,
                    newPoint: ev.newPoint,
                    cancelled: ev.cancelled
                }
                console.log(data);
                // this.setState({
                //     curCard: ev.newPoint
                // })
            }
        }*/
        let container={
            width:'2.8125rem',
            height:'2.8125rem',
            // display:'inline-block'
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

            <div>
                {/*第一页*/}
                <div>
                    <Row>
                        <Col span={6}>
                            <a href="">
                                <div style={container}><img  style={imgStyle} src={require('../images/swiper/food.jpg')} alt=""/></div>
                                <span>美食</span>
                            </a>
                        </Col>
                        <Col span={6}>
                            <div style={container}><img  style={imgStyle} src={require('../images/swiper/dinner.jpg')} alt=""/></div>
                            <span>晚餐</span>
                        </Col>
                        <Col span={6}>
                            <div style={container}><img  style={imgStyle} src={require('../images/swiper/supermarket.jpg')} alt=""/></div>
                            <span>商超便利</span>
                        </Col>
                        <Col span={6}>
                            <div style={container}><img  style={imgStyle} src={require('../images/swiper/fruit.jpg')} alt=""/></div>
                            <span>果树生鲜</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <div style={container}><img  style={imgStyle} src={require('../images/swiper/buger.jpg')} alt=""/></div>
                            <span>汉堡薯条</span>
                        </Col>
                        <Col span={6}>
                            <div style={container}><img  style={imgStyle} src={require('../images/swiper/50off.jpg')} alt=""/></div>
                            <span>大牌5折</span>
                        </Col>
                        <Col span={6}>
                            <div style={container}><img  style={imgStyle} src={require('../images/swiper/drink.jpg')} alt=""/></div>
                            <span>甜品饮品</span>
                        </Col>
                        <Col span={6}>
                            <div style={container}><img  style={imgStyle} src={require('../images/swiper/medic.jpg')} alt=""/></div>
                            <span>医药健康</span>
                        </Col>
                    </Row>

                </div>
                {/*第二页*/}
            </div>

        )
    }
}

export default MySwiper;