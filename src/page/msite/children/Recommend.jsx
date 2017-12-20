import React from 'react';
import '../../../style/Recommend.css'
import  axios from 'axios'
import {Row,Col,Rate} from 'antd'

class Recommend extends React.Component {
    constructor(){
        super();
        this.state ={
            recommends:[]
        };
    }
    componentWillMount(){
        axios.get('shopping/restaurantsRecommend').then((res)=>{
            // console.log(res.data);
            this.setState({
                recommends:res.data
            });
            console.log(this.state.recommends);
            // console.log(this.recommends);
        }).catch((err)=>{
            console.log(err);
        });

    }
    handleScroll(){
        var isPosted = false;
        let scrollTop = document.body.scrollTop ||document.documentElement.scrollTop;

        let clientHeight =document.body.clientHeight || document.documentElement.clientHeight;
        console.log("clientHeight:"+clientHeight);
        console.log("scrollTop:"+scrollTop);
        console.log(isPosted);
        if(scrollTop > clientHeight){
            // console.log("bingo");

            if(isPosted ===true){
                return 0;
            }
            else{
                axios.get('shopping/restaurantsRecommend10to20').then((res)=>{
                    isPosted =true;
                    console.log(isPosted);
                    // console.log(res.data);
                }).catch((err)=>{
                    console.log(err);
                })
            }

        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    componentWillReceiveProps(){

    }

    render() {


        return (
            <div style={{background:'#fff'}}>
                <div className="shopList-title"> 推荐商家 </div>
                <div id="shopList" className="shopList-content">
                    {this.state.recommends.map((reco)=>{
                        return(
                            <div>
                                <Row className="shopList-info">
                                    <Col span={6}>
                                        <img style={{width:'4.125rem',height:'4.125rem'}} src={require("../../../images/resturant/bugerking.png")} alt=""/>
                                    </Col>
                                    <Col span={18}>
                                        <ul>
                                            <li>
                                                <Row>
                                                    <Col span={3}><span className="brand">品牌</span></Col>
                                                    <Col span={16}>{reco.rname}</Col>
                                                    <Col span={3} offset={2}><span>保票</span></Col>
                                                </Row>
                                            </li>
                                            <li>
                                                <Row>
                                                    <Col span={8}><Rate disabled allowHalf defaultValue={4.3} style={{height:'1.25rem'}}/></Col>
                                                    <Col span={2}>{reco.rating}</Col>
                                                    <Col span={4}>月售{reco.recent_order_num}单</Col>
                                                    <Col span={6} offset={4}><span className="delivery-mode">蜂鸟配送</span></Col>
                                                </Row>
                                            </li>
                                            <li>
                                                <Row>
                                                    <Col span={8}>
                                                        <span>¥{reco.float_minimum_order_amount}起送</span>
                                                        <span>配送费¥{reco.float_delivery_fee}</span>
                                                    </Col>
                                                    <Col span={8} offset={8}>
                                                        <span>{reco.distance}</span>
                                                        <span>{reco.order_lead_time}</span>
                                                    </Col>
                                                </Row>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                                <Row className="shopList-activity">

                                </Row>
                            </div>

                        )
                    })}
                </div>
            </div>

        )
    }
}

export default Recommend;