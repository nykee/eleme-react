import React from 'react';
import {Row,Col} from 'antd'
import '../../style/header.css'
import '../../style/common.css'
import MsiteHeader from './children/MsiteHeader'
class Header extends React.Component {

    constructor(){
        super();
        this.state={
            title:''
        }


    }
    goBack(){
        window.history.go(-1)
    }
    componentWillMount(){
        let windPath =window.location.href.slice(window.location.href.indexOf('#')+1);
        console.log(windPath);
        if(windPath ==='/discover'){
            this.setState({
                title:'发现'
            })
        }
        else if(windPath ==='/order'){
            this.setState({
                title:'订单'
            })
        }
        else if(windPath ==='/profile'){
            this.setState({
                title:'我的'
            })
        }
    }


    render() {
        return (

            <div>
                {this.props.isIndex?<MsiteHeader />
                    :
                    <Row style={{background:'linear-gradient(90deg,#f5d293,#ef9c08)'}} className="header-container">
                        <Col span={2} style={{color:'#fff',paddingTop:'.4rem'}}><i className="fa fa-chevron-left" onClick={this.goBack}></i></Col>
                        <Col span={22} ><h2 style={{color:'#fff',paddingTop:'.4rem'}}>{this.props.subTitle?this.props.subTitle:this.state.title}</h2></Col>
                    </Row>}
            </div>

        )
    }
}

export default Header;