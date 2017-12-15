import React from 'react';
import {Row,Col} from 'antd'
class SearchHistory extends React.Component {
    constructor(){
        super();
        this.state ={
            isHide:false
        };
        this.hide =this.hide.bind(this);
    }
    hide(){
        this.setState({
            isHide:true
        })
    }
    render() {
        return (
            <div>
                {this.state.isHide?'':<div className="SearchHistory-Container">
                    <Row>
                        <Col span={5} className="SearchHistory-Title">历史搜索</Col>
                        <Col span={3} offset={16} onClick={this.hide}>
                            <i className="fa fa-trash"></i>
                        </Col>
                    </Row>
                    <Row  className="Search-Items-Row">
                        <Col span={4}><span className="Search-Items">炸鸡</span></Col>
                        <Col span={4}><span className="Search-Items">冒菜</span></Col>
                        <Col span={4}><span className="Search-Items">肯德基</span></Col>
                    </Row>
                </div>
                }
            </div>



        )
    }
}

export default SearchHistory;