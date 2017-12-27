import React from 'react';
import {Row,Col} from 'antd'
import ReactSwipe from 'react-swipe';
import '../../style/MySwiper.css'
import SwiperItem from './SwiperItem'
class MySwiper extends React.Component {
    constructor(){
        super();
        this.state={
            swipeOptions:{},
            activeNum:0
        }
    }
    componentWillMount(){
        let self =this;
        this.setState({
            swipeOptions:{
                continuous: true,
                callback(index) {
                    // console.log(index);
                    if(index===0||index===2){
                        self.setState({
                            activeNum:0
                        })
                    }
                    else {
                        self.setState({
                            activeNum:1
                        })
                    }
                    // console.log('slide changed');
                },
            }
        })
    }

    render() {

        return (
                <div style={{background:'#fff'}}>
                    <ReactSwipe  swipeOptions={this.state.swipeOptions}  >
                        <div >
                            <Row>
                                <Col span={6}>
                                    <SwiperItem imgSrc="food" itemName="美食" linkSrc="/food"></SwiperItem>
                                </Col>
                                <Col span={6}>
                                    <SwiperItem imgSrc="dinner" itemName="晚餐" linkSrc="/food"></SwiperItem>
                                </Col>
                                <Col span={6}>
                                    <SwiperItem imgSrc="supermarket" itemName="商超便利" linkSrc="/food"></SwiperItem>
                                </Col>
                                <Col span={6}>
                                    <SwiperItem imgSrc="fruit" itemName="果蔬生鲜" linkSrc="/food"></SwiperItem>
                                </Col>
                            </Row>
                            <Row style={{marginTop:'0.4rem'}}>
                                <Col span={6}>
                                    <SwiperItem imgSrc="buger" itemName="汉堡薯条" linkSrc="/food"></SwiperItem>
                                </Col>
                                <Col span={6}>
                                    <SwiperItem imgSrc="50off" itemName="大牌5折" linkSrc="/food"></SwiperItem>
                                </Col>
                                <Col span={6}>
                                    <SwiperItem imgSrc="drink" itemName="甜品饮品" linkSrc="/food"></SwiperItem>
                                </Col>
                                <Col span={6}>
                                    <SwiperItem imgSrc="medic" itemName="医药健康" linkSrc="/food"></SwiperItem>
                                </Col>
                            </Row>
                        </div>
                        <div style={{background:'#fff'}}>
                            <Row>
                                <Col span={6}>
                                    <SwiperItem imgSrc="food" itemName="浪漫鲜花" linkSrc="/food"></SwiperItem>
                                </Col>
                                <Col span={6}>
                                    <SwiperItem imgSrc="dinner" itemName="麻辣烫" linkSrc="/food"></SwiperItem>
                                </Col>
                                <Col span={6}>
                                    <SwiperItem imgSrc="supermarket" itemName="地方菜系" linkSrc="/food"></SwiperItem>
                                </Col>
                                <Col span={6}>
                                    <SwiperItem imgSrc="fruit" itemName="披萨意面" linkSrc="/food"></SwiperItem>
                                </Col>
                            </Row>
                            <Row  style={{marginTop:'0.3rem'}}>
                                <Col span={6}>
                                    <SwiperItem imgSrc="buger" itemName="地方小吃" linkSrc="/food"></SwiperItem>
                                </Col>
                                <Col span={6}>
                                    <SwiperItem imgSrc="50off" itemName="快餐便当" linkSrc="/food"></SwiperItem>
                                </Col>
                            </Row>
                        </div>
                    </ReactSwipe>
                    <div className="my-swipe-pagination">
                        <span className={this.state.activeNum ===0?"swipe-pagination-bullets-active":"swipe-pagination-bullets"}></span>
                        <span className={this.state.activeNum ===1?"swipe-pagination-bullets-active":"swipe-pagination-bullets"}></span>

                    </div>
                </div>
        )
    }
}

export default MySwiper;