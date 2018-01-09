import React from 'react';
import {Row,Col} from 'antd'
class EntryItems extends React.Component {
    render() {
        return (
            <Row>
                <Col span={18}  >
                    <h3>{this.props.mainTitle}</h3>
                    <p>{this.props.subTitle}</p>
                </Col>
                <Col span={6}>
                    <img  className="icon"  src={this.props.imgSrc} alt=""/>
                </Col>
            </Row>

        )
    }
}

export default EntryItems;