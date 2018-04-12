import React from 'react';
import {Row,Col,Input} from 'antd'
import {ScreenAPI} from '../../../../util/ScreenAPI'
import '../../../../style/ChooseLocation.css'
import emitter from '../../../../util/ev'

class ChooseLocation extends React.Component {
    constructor(){
        super();
        this.state ={
            isLocating:false,
            positionRight:0,
            hideStatus:''
        };
        this.fetchLocation =this.fetchLocation.bind(this);
        this.hide =this.hide.bind(this)
    }
    componentDidMount(){
        emitter.on('showLocationTable',()=>{
            this.setState({
                hideStatus:'show'
            })
        })
    }
    hide(){
        this.setState({
            hideStatus:'hide'
        })


    }
    fetchLocation(){
        this.setState({
            isLocating:true,

        });
        setTimeout(()=>{
            this.setState({
                isLocating:false
            })

        },1500);

    }
    render() {
        let clientWidth =ScreenAPI.getClientWidth();
        let clientHeight =ScreenAPI.getClientHeight();
        let myClassName ='';
        if(this.state.hideStatus ===''){
            myClassName = 'container'
        }
        else if(String(this.state.hideStatus) ==='show'){
            myClassName = 'container-show'
        }
        else {
            myClassName = 'container-hide'
        }
        return (
            <div style={{width:clientWidth,height:clientHeight}} className={myClassName}>
                <Row style={{background:'linear-gradient(90deg,#f5d293,#ef9c08)'}} >
                    <Col span={2} style={{color:'#fff',paddingTop:'.4rem'}}><i className="fa fa-chevron-left" onClick={this.hide}></i></Col>
                    <Col span={22} ><h2 style={{color:'#fff',paddingTop:'.4rem'}}>选择收获地址</h2></Col>
                </Row>
                <div style={{padding:'.4rem .4rem .3rem .5rem',background:'#fff'}}>
                    <Input placeholder="请输入地址" style={{background:'#f4f4f4'}}/>
                </div>
                <div>
                    <h4 style={{textAlign:'left'}}>当前地址</h4>
                </div>
                <Row style={{background:'#fff'}}>
                    <Col span={12}> <b>黄浦区上海市委(人民大道北)</b></Col>
                    <Col span={12} style={{color:'#F3C168'}} onClick={this.fetchLocation}>
                        <i className={this.state.isLocating?"fa fa-refresh fa-spin":'fa fa-refresh'}></i>
                        重新定位
                    </Col>
                </Row>
            </div>

        )
    }
}

export default ChooseLocation;