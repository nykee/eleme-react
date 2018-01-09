import React from 'react';

class ActivityItems extends React.Component {
    render() {
        return (
            <ul>
                <li className="activity-li"><img className="activity-img" src={this.props.imgSrc} alt=""/></li>
                <li className="activity-li">{this.props.itemName}</li>
                <li className="activity-li"><span>¥</span>{this.props.price}{this.props.priceBefore?<del>{this.props.priceBefore}</del>:''}</li>
                {this.props.discount?<span className="discount">{this.props.discount}</span>:''}
            </ul>

        )
    }
}

export default ActivityItems;