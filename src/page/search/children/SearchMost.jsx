import React from 'react';
import {Row,Col} from 'antd'

class SearchMost extends React.Component {
    render() {
        return (
            <div className="SearchMost-container">
                <div className="SearchMost-title">
                    热门搜索
                </div>
                <Row className="Search-Items-Row">
                    <Col span={4}><span className="Search-Items">麻辣烫</span></Col>
                    <Col span={4}><span className="Search-Items">奶茶</span></Col>
                    <Col span={4}><span className="Search-Items">星巴克</span></Col>
                    <Col span={4}><span className="Search-Items">一点点</span></Col>
                    <Col span={4}><span className="Search-Items">蛋糕</span></Col>
                </Row>
                <Row className="Search-Items-Row">
                    <Col span={4}><span className="Search-Items">肯德基</span></Col>
                    <Col span={4}><span className="Search-Items">粥</span></Col>
                    <Col span={4}><span className="Search-Items">咖啡</span></Col>
                    <Col span={4}><span className="Search-Items">麦当劳</span></Col>
                    <Col span={4}><span className="Search-Items">炸鸡</span></Col>
                </Row>
            </div>

        )
    }
}

export default SearchMost;