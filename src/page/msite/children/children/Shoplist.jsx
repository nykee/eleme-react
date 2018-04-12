import React from 'react';
import {Row,Col,Rate} from 'antd'
class Shoplist extends React.Component {
    componentWillReceiveProps(nextProps){
        // console.log(nextProps);
    };
    render() {
        const shops= this.props.shops;


        return(
            shops.map((shop)=>{
                return(
                    <div style={{borderBottom:'1px solid #333'}} >
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
                                            <Col span={4}>月售{shop.recentordernum}单</Col>
                                            <Col span={6} offset={4}><span className="delivery-mode">蜂鸟配送</span></Col>
                                        </Row>
                                    </li>
                                    <li>
                                        <Row>
                                            <Col span={10}>
                                                <span style={{paddingRight:'.27rem'}}>¥{shop.floatminimumorderamount}起送</span>
                                                <span style={{borderLeft:'1px solid #f5f5f5',paddingLeft:'.27rem'}}>配送费¥{shop.floatdeliveryfee}</span>
                                            </Col>
                                            <Col span={8} offset={6}>
                                                <span style={{paddingRight:'.27rem'}}>{shop.distance}</span>
                                                <span style={{borderLeft:'1px solid #f5f5f5',paddingLeft:'.27rem'}}>{shop.orderleadtime}</span>
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