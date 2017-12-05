import React from 'react';
import {Row,Col} from 'antd'
import "../style/common.css"

class commend extends React.Component {
    render() {
        return (
            <Row style={{padding:'0.7rem 0.7rem',color:'#fff'}} className="linerGradient">
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

        )
    }
}

export default commend;