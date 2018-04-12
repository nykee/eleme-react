import React from 'react';
import {Row,Col} from 'antd'
import {Link} from 'react-router'
import "../../style/footGuide.css"

class FootGuide extends React.Component {
    constructor(){
        super();
        this.state={
            isActive:0
        };
        this.toggleActive =this.toggleActive.bind(this);
    }

    toggleActive(e){
        console.log(e.currentTarget.getAttribute('data-index'));
        this.setState({
            isActive:e.currentTarget.getAttribute('data-index')
        })
    }
    render() {
        let clientW =  document.body.clientWidth;
        return (
            <div className="footGuideContainer" style={{width:clientW}}>
                <Row className="footGuideRow" >
                    <Col span={6 }    data-index={0} onClick={this.toggleActive}                                                                         >
                        <Link to="/msite"  className={this.state.isActive ===0?'active':'cLink'} >
                            <ul>
                                <li><i className="fa fa-paw  fa-2x"></i></li>
                                <li>外卖</li>
                            </ul>
                        </Link>
                    </Col>
                    <Col span={6} data-index={1} onClick={this.toggleActive}>
                        <Link to="/discover" className={this.state.isActive ===1?'active':'cLink'}  >
                            <ul>
                                <li><i className="fa fa-search fa-2x"></i></li>
                                <li>发现</li>
                            </ul>
                        </Link>
                    </Col>
                    <Col span={6} data-index={2} onClick={this.toggleActive}>
                        <Link to="/order" className={this.state.isActive ===2?'active':'cLink'}  >
                            <ul>
                                <li><i className="fa fa-tasks fa-2x"></i></li>
                                <li>订单</li>
                            </ul>
                        </Link>
                    </Col>
                    <Col span={6} data-index={3} onClick={this.toggleActive}>
                        <Link to="/profile" className={this.state.isActive ===3?'active':'cLink'}    >
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