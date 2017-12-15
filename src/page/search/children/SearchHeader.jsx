import React from 'react';
import {Row,Col,Button,Input} from 'antd'


class SearcHeader extends React.Component {
    goBack(){
        window.history.go(-1)
    }
    render() {
        return (
            <Row style={{padding:'.5rem 0 .4rem 0',background:'#fff'}} >
                <Col span={3} onClick={this.goBack}>
                    <i className="fa fa-chevron-left"></i>
                </Col>
                <Col span={16}><Input type="text" placeholder="请输入商家、商品名称"/></Col>
                <Col span={3} ><Button style={{background:'#F2B241',color:'#fff'}}>搜索</Button></Col>
            </Row>

        )
    }
}

export default SearcHeader;