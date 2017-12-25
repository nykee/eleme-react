import React from 'react';
import {Row,Col,Rate} from 'antd'
class Shoplist extends React.Component {
    render() {
        const shops= this.props.shops;


        return(
            shops.map((shop)=>{
                return(
                    <div style={{borderBottom:'1px solid #333'}}>
                        <Row className="shopList-info">
                            <Col span={6}>
                                <img style={{width:'4.125rem',height:'4.125rem'}} src={require("../../../../images/resturant/bugerking.png")} alt=""/>
                            </Col>
                            <Col span={18}>
                                <ul>
                                    <li>
                                        <Row>
                                            <Col span={3}><span className="brand">品牌</span></Col>
                                            <Col span={16}>{shop.rname}</Col>
                                            <Col span={3} offset={2}><span>保票</span></Col>
                                        </Row>
                                    </li>
                                    <li>
                                        <Row>
                                            <Col span={8}><Rate disabled allowHalf defaultValue={4.3} style={{height:'1.25rem'}}/></Col>
                                            <Col span={2}>{shop.rating}</Col>
                                            <Col span={4}>月售{shop.recent_order_num}单</Col>
                                            <Col span={6} offset={4}><span className="delivery-mode">蜂鸟配送</span></Col>
                                        </Row>
                                    </li>
                                    <li>
                                        <Row>
                                            <Col span={8}>
                                                <span>¥{shop.float_minimum_order_amount}起送</span>
                                                <span>配送费¥{shop.float_delivery_fee}</span>
                                            </Col>
                                            <Col span={8} offset={8}>
                                                <span>{shop.distance}</span>
                                                <span>{shop.order_lead_time}</span>
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
            })


            /*return(

            )*/
        )





    }
}

export default Shoplist;