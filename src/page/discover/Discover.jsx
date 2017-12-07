import React from 'react';
import {Row,Col} from 'antd'
import CheckMore from './children/CheckMore'
import '../../style/discover/discover.css'

class Discover extends React.Component {
    render() {
        return (
            <div style={{background:'#F5F5F5'}}>
                <Row style={{background:'#fff'}}>
                    <Col span={12}>
                        <Row>
                            <Col span={18}>
                                <h3>金币商城</h3>
                                <p>0元</p>
                            </Col>
                            <Col span={6}>
                                <img  className="icon"  src={"https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/"} alt=""/>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row>
                            <Col span={18}>
                                <h3>必吃爆料</h3>
                                <p>最夯外面指南</p>
                            </Col>
                            <Col span={6}>
                                <img  className="icon"  src={"https://fuss10.elemecdn.com/2/36/b784087aff96a97f4e5183d0d784fjpeg.jpeg?imageMogr/format/webp/"} alt=""/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{background:'#fff'}}>
                    <Col span={12}>
                        <Row>
                            <Col span={18}>
                                <h3>推荐有奖</h3>
                                <p>5元红包</p>
                            </Col>
                            <Col span={6}>
                                <img  className="icon"  src={"https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/"} alt=""/>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row>
                            <Col span={18}>
                                <h3>周边诱惑</h3>
                                <p>领取口碑好券</p>
                            </Col>
                            <Col span={6}>
                                <img  className="icon"  src={"https://fuss10.elemecdn.com/2/36/b784087aff96a97f4e5183d0d784fjpeg.jpeg?imageMogr/format/webp/"} alt=""/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{marginTop:'0.9rem',marginBottom:'0.9rem'}}>
                    <a >
                        <img src="https://fuss10.elemecdn.com/b/6d/656006edcd86033a1b32b23ddea37jpeg.jpeg?imageMogr/format/webp/" style={{width:'100%'}} alt=""/>
                    </a>
                </Row>

                {/*美食推荐*/}
                <div style={{background:'#fff'}}>
                    <Row >
                        <div>
                            <span className="line left"></span>
                            <i className="fa fa-thumbs-o-up" style={{marginLeft:'.4rem'}}></i>
                            <span className="activity-title">美食推荐</span>
                            <span className="line right"></span>
                        </div>
                        <p>你的口味我都懂</p>
                    </Row>
                    <Row className="activity-content"  gutter={10}>
                        <Col span={8}>
                            <ul>
                                <li className="activity-li"><img className="activity-img" src={"https://fuss10.elemecdn.com/b/ba/f943513d9175c7b7c8b782d8d45d0jpeg.jpeg?imageMogr/format/webp/"} alt=""/></li>
                                <li className="activity-li">乌冬面</li>
                                <li className="activity-li"><span>¥</span>30</li>
                            </ul>
                        </Col>
                        <Col span={8}>
                            <ul>
                                <li className="activity-li"><img className="activity-img" src="https://fuss10.elemecdn.com/1/53/d7f8918d19c1a75a6fa45e047677bjpeg.jpeg?imageMogr/format/webp/" alt=""/></li>
                                <li className="activity-li">午餐肉</li>
                                <li className="activity-li"><span>¥</span>40</li>
                            </ul>
                        </Col>
                        <Col span={8}>
                            <ul>
                                <li className="activity-li"><img className="activity-img" src="https://fuss10.elemecdn.com/6/df/118c377957845f32045f155dd9e30jpeg.jpeg?imageMogr/format/webp/" alt=""/></li>
                                <li className="activity-li">部队锅</li>
                                <li className="activity-li"><span>¥</span>50</li>
                            </ul>
                        </Col>
                    </Row>
                    <CheckMore></CheckMore>
                </div>

                {/*天天特价*/}
                <div style={{background:'#fff'}}>
                    <Row >
                        <div>
                            <span className="line left"></span>
                            <i className="fa fa-thumbs-o-up" style={{marginLeft:'.4rem'}}></i>
                            <span className="activity-title">天天特价</span>
                            <span className="line right"></span>
                        </div>
                        <p>特价商品，一网打尽</p>
                    </Row>
                    <Row className="activity-content" gutter={10}>
                        <Col span={8}>
                            <ul>
                                <li className="activity-li"><img className="activity-img" src="https://fuss10.elemecdn.com/6/ce/1b34ca447f77a45ce5b8484f2b9f4jpeg.jpeg?imageMogr/format/webp/" alt=""/></li>
                                <li className="activity-li">黑椒鸡排</li>
                                <li className="activity-li"><span><span>¥</span>30</span> <del>¥31</del></li>
                                <span className="discount">4.6折</span>
                            </ul>
                        </Col>
                        <Col span={8}>
                            <ul>
                                <li className="activity-li"><img className="activity-img" src="https://fuss10.elemecdn.com/5/53/d25e9595dc5bf47c2301169fd9269jpeg.jpeg?imageMogr/format/webp/" alt=""/></li>
                                <li className="activity-li">拿铁咖啡</li>
                                <li className="activity-li"><span><span>¥</span>40</span> <del>¥31</del></li>
                                <span className="discount">6.6折</span>
                            </ul>
                        </Col>
                        <Col span={8}>
                            <ul>
                                <li className="activity-li"><img className="activity-img" src="https://fuss10.elemecdn.com/6/10/fe8702bd80332fcbdf5998ab65449jpeg.jpeg?imageMogr/format/webp/" alt=""/></li>
                                <li className="activity-li">滋补猪肚鸡</li>
                                <li className="activity-li"><span><span>¥</span>50</span> <del>¥31</del></li>
                                <span className="discount">6.6折</span>
                            </ul>
                        </Col>
                    </Row>
                    <CheckMore></CheckMore>
                </div>

                {/*限时好礼*/}
                <div style={{background:'#fff',marginBottom:'1.2rem'}}>
                    <Row >
                        <div>
                            <span className="line left"></span>
                            <i className="fa fa-thumbs-o-up" style={{marginLeft:'.4rem'}}></i>
                            <span className="activity-title">限时好礼</span>
                            <span className="line right"></span>
                        </div>
                        <p>金币换好礼</p>
                    </Row>
                    <Row className="activity-content" gutter={10}>
                        <Col span={8}>
                            <ul>
                                <li className="activity-li"><img className="activity-img" src="https://fuss10.elemecdn.com/7/c5/f595b52bc6b50c9899398dccffd42jpeg.jpeg?imageMogr/format/webp/" alt=""/></li>
                                <li className="activity-li">7元饿了么红包</li>
                                <li className="activity-li"><span><span>¥</span>30</span> <del>¥31</del></li>
                                <span className="discount">限时优惠</span>
                            </ul>
                        </Col>
                        <Col span={8}>
                            <ul>
                                <li className="activity-li"><img className="activity-img" src="https://fuss10.elemecdn.com/a/2f/8ffb52091977a5d6ac64e475b7dabjpeg.jpeg?imageMogr/format/webp/" alt=""/></li>
                                <li className="activity-li">冬季优越，送你</li>
                                <li className="activity-li"><span><span>¥</span>40</span> <del>¥31</del></li>
                                <span className="discount">0元抽奖</span>
                            </ul>
                        </Col>
                        <Col span={8}>
                            <ul>
                                <li className="activity-li"><img className="activity-img" src="https://fuss10.elemecdn.com/0/53/47a80976e90c99f40b745cde5246fjpeg.jpeg?imageMogr/format/webp/" alt=""/></li>
                                <li className="activity-li">iPhone7 32G</li>
                                <li className="activity-li"><span><span>¥</span>50</span> <del>¥31</del></li>
                                <span className="discount">0元抽奖</span>
                            </ul>
                        </Col>
                    </Row>
                    <CheckMore></CheckMore>
                </div>

            </div>

        )
    }
}

export default Discover;