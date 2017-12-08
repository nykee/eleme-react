import React from 'react';
import {Button} from 'antd'

class notLoginPage extends React.Component {
    render() {
        let clientHeight = document.body.clientHeight;
        console.log(clientHeight);
        return (
            <div style={{background:'#f5f5f5',fontSize:'1.2rem',height:clientHeight-72.7}}>
                <div >
                    <ul>
                        <li><img style={{width:'80%',height:'80%'}} src="//fuss10.elemecdn.com/f/18/9fb04779371b5b162b41032baf5f3gif.gif" alt=""/></li>
                        <li>登录后查看外卖订单</li>
                        <li><Button style={{backgroundColor:'#56D176',color:'#fff'}}>立刻登录</Button></li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default notLoginPage;