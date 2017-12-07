import React from 'react';
import '../../../style/Recommend.css'

class Recommend extends React.Component {
    render() {
        return (
            <div style={{background:'#fff'}}>
                <div className="shopList-title"> 推荐商家 </div>
                <div id="shopList">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default Recommend;