import React from 'react';
import {Row} from 'antd'
class ActivityTitle extends React.Component {
    render() {
        return (
            <Row >
                <div>
                    <span className="line left"/>
                    <i className="fa fa-thumbs-o-up" style={{marginLeft:'.4rem'}}/>
                    <span className="activity-title">{this.props.title}</span>
                    <span className="line right"/>
                </div>
                <p>{this.props.subtitle}</p>
            </Row>

        )
    }
}

export default ActivityTitle;