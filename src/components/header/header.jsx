import React from 'react';
import {Link} from 'react-router'
import {arrowDown,locationSvg} from '../common/SVG';
import {Row,Col} from 'antd'
class Header extends React.Component {
    render() {
        return (
            <header>
                {/*地理位置*/}
               <Row style={{background:' linear-gradient(90deg,#f5d293,#ef9c08)'}}>
                   <Col span={16}>
                       <locationSvg />
                       <span>黄浦区上海市委(人民大道北)</span>
                       <arrowDown></arrowDown>
                   </Col>
                   <Col span={8}>
                       <div style={{display:'inline-block'}}>
                           <h2>11°</h2>
                           <p>多云天</p>
                       </div>
                       <img style={{width:'3rem',height:'3rem'}} src="//fuss10.elemecdn.com/2/52/5383cfd55c8ba454449f63f54ce2apng.png?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/" alt="天气图标"/>
                   </Col>
               </Row>
                <Row style={{background:' linear-gradient(90deg,#f5d293,#ef9c08)'}}>
                    {/*搜索框*/}
                    <div  style={{top: 0, zIndex: 999,padding:'1.2rem 1.6rem'}}><a style={{background:'#fff',display:'flex',height:'2.2rem',justifyContent:'center',alignItems:'center'}} ><svg style={{height:'0.6rem',width:'0.6rem'}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#search">
                        <svg viewBox="0 0 14 14" id="search" width="100%" height="100%"><g fill="#999" fill-rule="evenodd"><path fill-rule="nonzero" d="M5.5 9.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"></path><rect width="1.5" height="6" x="9.904" y="7.859" rx=".5" transform="rotate(-45 10.654 10.859)"></rect></g></svg>
                    </use></svg><span>搜索商家、商品名称</span></a></div>
                </Row>
                <Row style={{background:' linear-gradient(90deg,#f5d293,#ef9c08)',padding:'0.7rem 0.7rem'}}>
                    {/*关键词*/}
                    <Col span={3}>粥</Col>
                    <Col span={3}>香酥鸡</Col>
                    <Col span={3}>蛋糕</Col>
                    <Col span={3}>双12</Col>
                    <Col span={3}>一点点</Col>
                    <Col span={3}>奶茶</Col>
                    <Col span={3}>沙拉</Col>
                    <Col span={3}>披萨</Col>
                </Row>

            </header>

        )
    }
}

export default Header;