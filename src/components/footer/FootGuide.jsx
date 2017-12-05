import React from 'react';
import {Row,Col} from 'antd'
import {Link} from 'react-router'
import "../../style/footGuide.css"

class FootGuide extends React.Component {
    render() {
        return (
            <div className="footGuideContainer">
                <Row className="footGuideRow" >
                    <Col span={6}>
                        <Link to="/msite"  className="cLink">
                            <ul>
                                <li><i className="fa fa-paw  fa-2x"></i></li>
                                <li>外卖</li>
                            </ul>
                        </Link>
                    </Col>
                    <Col span={6}>
                        <Link to="/discover" className="cLink">
                            <ul>
                                <li><i className="fa fa-search fa-2x"></i></li>
                                <li>发现</li>
                            </ul>
                        </Link>
                    </Col>
                    <Col span={6}>
                        <Link to="/order" className="cLink">
                            <ul>
                                <li><i className="fa fa-tasks fa-2x"></i></li>
                                <li>订单</li>
                            </ul>
                        </Link>
                    </Col>
                    <Col span={6}>
                        <Link to="/profile" className="cLink">
                            <ul>
                                <li><i className="fa fa-user-o fa-2x"></i></li>
                                <li>我的</li>
                            </ul>
                        </Link>
                    </Col>
                </Row>
            </div>


        )
    }
}

export default FootGuide;