import React from 'react';
import {Row,Col} from 'antd'
import ReactSwipe from 'react-swipe';
class MySwiper extends React.Component {
    constructor(){
        super();
    }

    // transitionEnd= (index, elem)=>{
    //     console.log(index);
    // };
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





                <ReactSwipe  swipeOptions={{continuous: true}}  >
                    <div style={{background:'#fff'}}>
                        <Row>
                            <Col span={6}>

                                <a href="">
                                    <ul>
                                        <li>
                                            <div style={container}><img  style={imgStyle} src={require('../images/swiper/food.jpg')} alt=""/></div>
                                        </li>
                                        <li>
                                            <span>美食</span>
                                        </li>
                                    </ul>
                                </a>


                            </Col>
                            <Col span={6}>
                                <ul>
                                    <li>
                                        <div style={container}><img  style={imgStyle} src={require('../images/swiper/dinner.jpg')} alt=""/></div>
                                    </li>
                                    <li>
                                        <span>晚餐</span>
                                    </li>
                                </ul>


                            </Col>
                            <Col span={6}>
                                <ul>
                                    <li>
                                        <div style={container}><img  style={imgStyle} src={require('../images/swiper/supermarket.jpg')} alt=""/></div>
                                    </li>
                                    <li>
                                        <span>商超便利</span>
                                    </li>
                                </ul>


                            </Col>
                            <Col span={6}>
                                <ul>
                                    <li>
                                        <div style={container}><img  style={imgStyle} src={require('../images/swiper/fruit.jpg')} alt=""/></div>
                                    </li>
                                    <li>
                                        <span>果树生鲜</span>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row style={{marginTop:'0.4rem'}}>
                            <Col span={6}>
                                <ul>
                                    <li>
                                        <div style={container}><img  style={imgStyle} src={require('../images/swiper/buger.jpg')} alt=""/></div>
                                    </li>
                                    <li>
                                        <span>汉堡薯条</span>
                                    </li>
                                </ul>
                            </Col>
                            <Col span={6}>
                                <ul>
                                    <li>
                                        <div style={container}><img  style={imgStyle} src={require('../images/swiper/50off.jpg')} alt=""/></div>
                                    </li>
                                    <li>
                                        <span>大牌5折</span>
                                    </li>
                                </ul>
                            </Col>
                            <Col span={6}>
                                <ul>
                                    <li>
                                        <div style={container}><img  style={imgStyle} src={require('../images/swiper/drink.jpg')} alt=""/></div>
                                    </li>
                                    <li>
                                        <span>甜品饮品</span>
                                    </li>
                                </ul>
                            </Col>
                            <Col span={6}>
                                <ul>
                                    <li>
                                        <div style={container}><img  style={imgStyle} src={require('../images/swiper/medic.jpg')} alt=""/></div>
                                    </li>
                                    <li>
                                        <span>医药健康</span>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <div style={{background:'#fff'}}>
                        <Row>
                            <Col span={6}>

                                <a href="">
                                    <ul>
                                        <li>
                                            <div style={container}><img  style={imgStyle} src={require('../images/swiper/food.jpg')} alt=""/></div>
                                        </li>
                                        <li>
                                            <span>浪漫鲜花</span>
                                        </li>
                                    </ul>
                                </a>


                            </Col>
                            <Col span={6}>
                                <ul>
                                    <li>
                                        <div style={container}><img  style={imgStyle} src={require('../images/swiper/dinner.jpg')} alt=""/></div>
                                    </li>
                                    <li>
                                        <span>麻辣烫</span>
                                    </li>
                                </ul>


                            </Col>
                            <Col span={6}>
                                <ul>
                                    <li>
                                        <div style={container}><img  style={imgStyle} src={require('../images/swiper/supermarket.jpg')} alt=""/></div>
                                    </li>
                                    <li>
                                        <span>地方菜系</span>
                                    </li>
                                </ul>


                            </Col>
                            <Col span={6}>
                                <ul>
                                    <li>
                                        <div style={container}><img  style={imgStyle} src={require('../images/swiper/fruit.jpg')} alt=""/></div>
                                    </li>
                                    <li>
                                        <span>披萨意面</span>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row  style={{marginTop:'0.3rem'}}>
                            <Col span={6}>
                                <ul>
                                    <li>
                                        <div style={container}><img  style={imgStyle} src={require('../images/swiper/buger.jpg')} alt=""/></div>
                                    </li>
                                    <li>
                                        <span>地方小吃</span>
                                    </li>
                                </ul>
                            </Col>
                            <Col span={6}>
                                <ul>
                                    <li>
                                        <div style={container}><img  style={imgStyle} src={require('../images/swiper/50off.jpg')} alt=""/></div>
                                    </li>
                                    <li>
                                        <span>快餐便当</span>
                                    </li>
                                </ul>
                            </Col>

                        </Row>
                    </div>
                    {/*todo paginatiobn分页显示*/}
                </ReactSwipe>




        )
    }
}

export default MySwiper;