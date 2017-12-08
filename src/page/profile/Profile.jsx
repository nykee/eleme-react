import React from 'react';
import {Row,Col} from 'antd'
import {Link} from 'react-router'
import ChevronRight from '../../components/common/ChevronRight'
import "../../style/profile.css"

class Profile extends React.Component {
    render() {
        return (
            <div>
                {/*登录及头像框*/}
                <div className="avatar-container" >
                    <Row gutter={20}>
                        <Col span={4}>
                            <span className="p-avatar">
                                <svg className="p-avatar-svg"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#avatar-default">
                                    <svg viewBox="0 0 122 122" id="avatar-default" width="100%" height="100%"><path fill="#DCDCDC" fill-rule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"></path></svg>
                                </use></svg>
                            </span>
                        </Col>
                        <Col span={14} offset={2} className="textAlign-left">
                            <ul style={{color:'#fff'}}>
                                <li><h2 style={{color:'#fff'}}>登录/注册</h2></li>
                                <li>
                                    <i className="fa fa-mobile" style={{marginRight:'.2rem'}}></i>
                                    <span>登录后享受更多特权</span>
                                </li>
                            </ul>
                        </Col>
                        <Col span={4} className="textAlign-right" style={{color:'#fff'}}>
                            <ChevronRight></ChevronRight>
                        </Col>
                    </Row>
                </div>
                <div className="main-body">
                    <Row  className="yh-container">
                        <Col span={12} style={{borderRight:'1px solid #F0F0F0'}}>
                            <ul>
                                <li>
                                    <svg className="yh-svg" fill="#ff5f3e"><use xmlnslink="http://www.w3.org/1999/xlink" xlinkHref="#luckybag">
                                        <svg viewBox="0 0 48 48" id="luckybag" width="100%" height="100%"><path fill-rule="evenodd" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm7.6 15H16.4c.1.1.1.2.1.4.4 2.5 3.3 4.3 7.1 4.4 2.4 0 4.8-.6 6.1-1.6.4-.3 1.1-.3 1.4.2.3.5.3 1.1-.2 1.4-1.6 1.3-4.3 2.1-7.1 2.1h-.5c-3.9-.2-7-2-8.3-4.6V32c0 .5.7 1 1.4 1h15.2c.8 0 1.4-.5 1.4-1V16c0-.5-.7-1-1.4-1zM35 32c0 1.7-1.5 3-3.4 3H16.4c-1.9 0-3.4-1.3-3.4-3V16c0-1.4 1-2.5 2.5-2.9h.2c.1-.1.3-.1.4-.1h15.5c1.9 0 3.4 1.3 3.4 3v16z"></path></svg>
                                    </use></svg>
                                </li>
                                <li>优惠</li>
                            </ul></Col>
                        <Col span={12}>
                            <ul>
                                <li>
                                    <svg className="yh-svg" fill="#6ac20b"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#profile-coins">
                                        <svg viewBox="0 0 48 48" id="profile-coins" width="100%" height="100%"><path fill-rule="evenodd" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm-9 26.8v3.3c0 1.2 3.6 2.9 9 2.9s9-1.7 9-2.9v-3.3c-2.1 1.3-5.6 1.9-9 1.9-3.4.1-6.9-.6-9-1.9zM24 15c-5.8 0-9 1.8-9 2.8 0 1 3.2 2.8 9 2.8s9-1.8 9-2.8c0-1-3.2-2.8-9-2.8zm-9 5.6V24c0 .9 3.2 2.8 9 2.8s9-1.8 9-2.8v-3.4c-2.1 1.3-5.6 1.9-9 1.9-3.4 0-6.9-.6-9-1.9zM35 24v6.1c0 3.2-5.5 4.9-11 4.9s-11-1.7-11-4.9V17.8c0-3.1 5.5-4.8 11-4.8s11 1.6 11 4.8V24z"></path></svg>
                                    </use></svg>
                                </li>
                                <li>金币</li>
                            </ul></Col>
                    </Row>
                    <Row className="add-container container-row">
                        <Link to="/address">
                        <Col span={12} className="textAlign-left">
                             <span className="svg-container">
                                <svg className="profile-svg" fill="#4aa5f0"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#address">
                                    <svg viewBox="0 0 16 16" id="address" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><path fill="#FFF" fill-opacity="0" d="M0 0h16v16H0z"></path><path fill="#4AA5F0" d="M8 2.667A2.667 2.667 0 1 1 8 8a2.667 2.667 0 0 1 0-5.333M2.273 6.509a5.48 5.48 0 0 1-.051-.732 5.778 5.778 0 1 1 11.556 0 5.54 5.54 0 0 1-.085.948 5.704 5.704 0 0 1-.258.999 6.565 6.565 0 0 1-.081.22c-.016.039-.03.078-.047.116C11.932 11.45 8 13.778 8 13.778S3.734 11.273 2.535 7.64a5.756 5.756 0 0 1-.262-1.132zm8.584 6.701c2.516.124 5.143.43 5.143 1.068 0 .901-5.233 1.138-8 1.138-2.768 0-8-.237-8-1.138 0-.639 2.627-.944 5.143-1.068 1.22 1.044 2.3 1.61 2.404 1.663.14.07.296.108.453.108.156 0 .314-.038.454-.109.104-.052 1.184-.618 2.403-1.662z"></path></g></svg>
                                </use></svg>
                            </span>
                            <span className="actName">我的地址</span>
                        </Col>
                        <Col span={12} className="textAlign-right ChevronRight">
                            <ChevronRight ></ChevronRight>
                        </Col>
                        </Link>
                    </Row>
                    <div className="gold-container">
                        <Row className="container-row borderBTM">
                            <Col span={12} className="textAlign-left">
                            <span className="svg-container">
                                <svg className="profile-svg" fill="#fc7b53"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#point">
                                    <svg viewBox="0 0 16 16" id="point" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><path fill="#FFF" fill-opacity="0" d="M0 0h16v16H0z"></path><path fill="#94D94A" d="M2.257.5h11.486a1 1 0 0 1 .998.936l.757 11.728a2 2 0 0 1-1.996 2.129H2.498a2 2 0 0 1-1.996-2.129L1.26 1.436A1 1 0 0 1 2.257.5zm9.658 3.782C11.82 6.452 10.14 8.18 7.95 8.18c-2.202 0-3.925-1.747-4.003-3.933a.594.594 0 0 1 .36-1.075.596.596 0 1 1 .25 1.14c.109 1.82 1.548 3.26 3.393 3.26 1.853 0 3.263-1.455 3.357-3.287a.595.595 0 0 1 .3-1.113.595.595 0 1 1 .307 1.11z"></path></g></svg>
                                </use></svg>
                            </span>
                                <span className="actName">金币商城</span>
                            </Col>
                            <Col span={12} className="textAlign-right ChevronRight">
                                <ChevronRight ></ChevronRight>
                            </Col>
                        </Row>
                        <Row className="container-row">
                            <Col span={12} className="textAlign-left">
                            <span className="svg-container">
                                <svg className="profile-svg" fill="#4aa5f0"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#commend">
                                    <svg viewBox="0 0 40 40" id="commend" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><path fill="#FC7B53" d="M21 12c-.167-.434-1-1-1-1-.275.437-.767.601-1 1v7H4v-6c0-.843.716-1.562 2-2h6c-1.49.06-2.84-.711-3-2 .06-1.814 1.949-4.528 5-4 2.552.733 4.541 2.943 6 5 1.6-2.094 3.778-4.58 7-5 2.23-.288 4.282 2.198 4 4-.208 1.276-1.582 2.06-3 2h6c1.173.437 1.89 1.156 2 2v6H21v-7zm-7-6c-1.123-.321-1.966.238-3 1 .097.68-.258 1.373 0 2 1.653 1.192 5.452 1.096 8 1-1.202-1.529-2.679-3.07-5-4zm16 3c.726-1.246-1.22-3.714-3-3-2.313 1.075-3.755 2.506-5 4 1.071 0 2.158.023 3 0 1.542-.075 3.965-.16 5-1zM19 36H8c-1.326-.255-2-.907-2-2V20h13v16zm13 0H21V20h13v14c-.47 1.53-1.124 1.745-2 2z"></path></g></svg>
                                </use></svg>
                            </span>
                                <span className="actName">分享拿5元现金</span>
                            </Col>
                            <Col span={12} className="textAlign-right ChevronRight">
                                <ChevronRight ></ChevronRight>
                            </Col>
                        </Row>

                    </div>
                    <div className="download-container">
                        <Row className="container-row borderBTM ">
                            <Col span={12} className="textAlign-left">
                            <span className="svg-container">
                                <svg className="profile-svg" fill="#4aa5f0"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#service">
                                    <svg viewBox="0 0 54 54" id="service" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><path stroke="#4DA6F0" stroke-width="3" d="M48 28c0 11.598-9.402 21-21 21"></path><path fill="#4DA6F0" d="M43 40.012v-18h2a9 9 0 0 1 9 9 9 9 0 0 1-9 9h-2zM10 40.012H9a9 9 0 0 1-9-9 9 9 0 0 1 9-9h1v18zM27 46a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path><path fill="#4DA6F0" d="M43 24h6c0-12.426-9.574-23-22-23S4 11.574 4 24h6c0-9.098 7.902-17 17-17 9.097 0 16 7.902 16 17z"></path></g></svg>
                                </use></svg>
                            </span>
                                <span className="actName">我的客服</span>
                            </Col>
                            <Col span={12} className="textAlign-right ChevronRight">
                                <ChevronRight ></ChevronRight>
                            </Col>
                        </Row>
                        <Row className="container-row">
                            <Col span={12} className="textAlign-left">
                            <span className="svg-container">
                                <svg className="profile-svg" fill="#4aa5f0"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#download">
                                    <svg viewBox="0 0 40 40" id="download" width="100%" height="100%"><path d="M30 5H10c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5V10c0-2.8-2.2-5-5-5zm-3.9 22.7c-.1.2-.3.4-.6.5-4.3 2.8-10.1 1.6-13-2.8-2.8-4.3-1.6-10.2 2.8-13 4.3-2.8 10.2-1.6 13 2.8.2.2.3.5.4.8.1.2 0 .5-.2.7l-8.8 5.7c-.2.2-.6.1-.7-.2l-.5-.7c-.4-.6-.2-1.5.4-1.9l5.6-3.6c.2-.2.3-.5.2-.7l-.1-.1c-2.2-1.8-5.4-2.1-7.9-.4-3.1 2-4 6.1-2 9.2 2 3.1 6.1 4 9.2 2 .6-.4 1.3-.2 1.7.4l.3.7c.1.2.4.5.2.6zm3.1-4.4l-.9.6c-.2.2-.6.1-.7-.2L26.5 22c-.2-.2-.1-.6.2-.7l1.8-1.1c.2-.2.6-.1.7.2l.6.9c.3.6.1 1.5-.6 2z"></path></svg>
                                </use></svg>
                            </span>
                                <span className="actName">下载饿了么app</span>
                            </Col>
                            <Col span={12} className="textAlign-right ChevronRight" >
                                <ChevronRight ></ChevronRight>
                            </Col>
                        </Row>

                    </div>
                </div>

            </div>


        )
    }
}

export default Profile