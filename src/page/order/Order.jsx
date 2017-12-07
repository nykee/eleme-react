import React from 'react';
import IsLoginPage from './children/IsLoginPage'
import NotLoginPage from './children/NotLoginPage'

class Order extends React.Component {
    constructor(){
        super();
        this.state={
            isLogin:false
        }
    }
    render() {
        return (
            <div>
                {this.state.isLogin?<IsLoginPage/>:<NotLoginPage/>}
            </div>

        )
    }
}

export default Order;