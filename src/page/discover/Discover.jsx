import React from 'react';
import {Row,Col} from 'antd'
import CheckMore from './children/CheckMore'
import '../../style/discover/discover.css'
import ActivityItems from './children/ActivityItems'
import ActivityTitle from './children/ActivityTitle'
import EntryItems from './children/EntryItems'

class Discover extends React.Component {
    render() {
        let clientW =  document.body.clientWidth;
        // let cH =document.body.clientHeight;
        // console.log(clientW);
        // console.log(cH);
        return (
            <div style={{background:'#F5F5F5',height:'100%',paddingBottom:'65px'}}>
                <Row style={{background:'#fff'}}>
                    <Col span={12} className="entry-items">
                        <EntryItems mainTitle="金币商城"
                                    subTitle="0元好物在这里"
                                    imgSrc="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/"
                        />
                    </Col>
                    <Col span={12} className="entry-items">
                        <EntryItems mainTitle="必吃爆料"
                                    subTitle="最夯外卖指南"
                                    imgSrc="https://fuss10.elemecdn.com/2/36/b784087aff96a97f4e5183d0d784fjpeg.jpeg?imageMogr/format/webp/"
                        />
                    </Col>
                </Row>
                <Row style={{background:'#fff'}}>
                    <Col span={12} className="entry-items">
                        <EntryItems mainTitle="推荐有奖"
                                    subTitle="5元红包"
                                    imgSrc="https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/"
                        />
                    </Col>
                    <Col span={12} className="entry-items">
                        <EntryItems mainTitle="周边优惠"
                                    subTitle="领取口碑好券"
                                    imgSrc="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/"
                        />
                    </Col>
                </Row>
                <Row style={{marginTop:'0.9rem',marginBottom:'0.9rem'}}>
                    <a >
                        <img src="https://fuss10.elemecdn.com/b/6d/656006edcd86033a1b32b23ddea37jpeg.jpeg?imageMogr/format/webp/" style={{width:clientW}} alt=""/>
                    </a>
                </Row>

                {/*美食推荐*/}
                <div style={{background:'#fff'}}>
                    <ActivityTitle title="美食推荐" subtitle="你的口味我都懂"/>
                    <Row className="activity-content" >
                        <Col span={8}>
                            <ActivityItems itemName="乌冬面"
                                           imgSrc="https://fuss10.elemecdn.com/b/ba/f943513d9175c7b7c8b782d8d45d0jpeg.jpeg?imageMogr/format/webp/"
                                           price="30"
                            />
                        </Col>
                        <Col span={8}  >
                            <ActivityItems itemName="午餐肉"
                                           imgSrc="https://fuss10.elemecdn.com/1/53/d7f8918d19c1a75a6fa45e047677bjpeg.jpeg?imageMogr/format/webp/"
                                           price="40"
                            />
                        </Col>
                        <Col span={8}>
                            <ActivityItems itemName="部队锅"
                                           imgSrc="https://fuss10.elemecdn.com/6/df/118c377957845f32045f155dd9e30jpeg.jpeg?imageMogr/format/webp/"
                                           price="88"
                            />
                        </Col>
                    </Row>
                    <CheckMore/>
                </div>

                {/*天天特价*/}
                <div style={{background:'#fff'}}>
                    <ActivityTitle title="天天特价" subtitle="特价商品，一网打尽"/>
                    <Row className="activity-content" >
                        <Col span={8}>
                            <ActivityItems itemName="黑椒鸡排"
                                           imgSrc="https://fuss10.elemecdn.com/6/ce/1b34ca447f77a45ce5b8484f2b9f4jpeg.jpeg?imageMogr/format/webp/"
                                           price="88"
                                           priceBefore='¥101'
                                           discount="4.6折"
                            />
                        </Col>
                        <Col span={8} >
                            <ActivityItems itemName="拿铁咖啡"
                                           imgSrc="https://fuss10.elemecdn.com/5/53/d25e9595dc5bf47c2301169fd9269jpeg.jpeg?imageMogr/format/webp/"
                                           price="28"
                                           priceBefore='¥39'
                                           discount="6.6折"
                            />
                        </Col>
                        <Col span={8}>
                            <ActivityItems itemName="滋补猪肚鸡"
                                           imgSrc="https://fuss10.elemecdn.com/6/10/fe8702bd80332fcbdf5998ab65449jpeg.jpeg?imageMogr/format/webp/"
                                           price="58"
                                           priceBefore='¥91'
                                           discount="6.6折"
                            />
                        </Col>
                    </Row>
                    <CheckMore/>
                </div>

                {/*限时好礼*/}
                <div style={{background:'#fff',paddingBottom:'1.2rem'}}>
                    <ActivityTitle title="限时好礼" subtitle="金币换好礼"/>
                    <Row className="activity-content" >
                        <Col span={8}>
                            <ActivityItems itemName="7元饿了么红包"
                                           imgSrc="https://fuss10.elemecdn.com/7/c5/f595b52bc6b50c9899398dccffd42jpeg.jpeg?imageMogr/format/webp/"
                                           price="88"
                                           priceBefore='¥31'
                                           discount="限时优惠"
                            />
                        </Col>
                        <Col span={8} style={{padding:'0 .2rem'}}>
                            <ActivityItems itemName="冬季优越，送你"
                                           imgSrc="https://fuss10.elemecdn.com/a/2f/8ffb52091977a5d6ac64e475b7dabjpeg.jpeg?imageMogr/format/webp/"
                                           price="40"
                                           priceBefore='¥31'
                                           discount="0元抽奖"
                            />
                        </Col>
                        <Col span={8}>
                            <ActivityItems itemName="iPhone7 32G"
                                           imgSrc="https://fuss10.elemecdn.com/0/53/47a80976e90c99f40b745cde5246fjpeg.jpeg?imageMogr/format/webp/"
                                           price="50"
                                           priceBefore='¥31'
                                           discount="0元抽奖"
                            />
                        </Col>
                    </Row>
                    <CheckMore/>
                </div>
            </div>
        )
    }
}
export default Discover;