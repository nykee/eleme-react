import React from 'react';
import '../../../style/discover/checkmore.css'

class CheckMore extends React.Component {
    render() {
        return (
            <p style={{color:'#999999'}}>
                查看更多
                <i className="fa fa-chevron-right " ></i>
            </p>

        )
    }
}

export default CheckMore;