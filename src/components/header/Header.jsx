import React from 'react';
// import {Link} from 'react-router'
import '../../style/header.css'
import '../../style/common.css'
import {Row,Col} from 'antd'
class Header extends React.Component {
    render() {
        return (
            <header>
                {/*地理位置*/}
               <Row className="linerGradient ">
                   <Col span={16} className="locationCol headInfo">
                       <svg className="loca-svg">
                           <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#location">
                               <svg viewBox="0 0 26 31" id="location" width="100%" height="100%"><path fill="#FFF" fillRule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path></svg>
                           </use>
                       </svg>
                       <span className="location">黄浦区上海市委(人民大道北)</span>
                       <svg className="svg">
                           <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#arrow">
                               <svg viewBox="0 0 14 8" id="arrow" width="100%" height="100%"><path fill="#FFF" fillRule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path></svg>
                            </use>
                       </svg>
                   </Col>
                   <Col span={6} offset={2} className="weatherCol">
                       <div className="inlineB">
                           <h2 style={{color:'#fff'}}>11°</h2>
                           <p style={{color:'#fff'}}>多云天</p>
                       </div>
                       <img className='weatherPic' src="//fuss10.elemecdn.com/2/52/5383cfd55c8ba454449f63f54ce2apng.png?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/" alt="天气图标"/>
                   </Col>
               </Row>



            </header>

        )
    }
}

export default Header;