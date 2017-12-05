import React from 'react';
import {Row} from 'antd'
import "../style/common.css"
import "../style/search.css"

class Search extends React.Component {
    render() {
        return (
            <Row className="linerGradient">
                {/*搜索框*/}
                <div  className="searchContainer">
                    <a className="searchContent" >
                        <svg className="svg" style={{marginRight:'0.2rem'}}>
                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#search">
                                <svg viewBox="0 0 14 14" id="search" width="100%" height="100%"><g fill="#999" fillRule="evenodd"><path fillRule="nonzero" d="M5.5 9.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"></path><rect width="1.5" height="6" x="9.904" y="7.859" rx=".5" transform="rotate(-45 10.654 10.859)"></rect></g></svg>
                            </use>
                        </svg>
                        <span>搜索商家、商品名称</span>
                    </a>
                </div>
            </Row>

        )
    }
}

export default Search;