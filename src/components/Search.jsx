import React from 'react';
import "../style/common.css"
import "../style/search.css"

class Search extends React.Component {
    render() {
        return (
            <div className="linerGradient searchContainerRow ">
                {/*搜索框*/}
                <div  className="searchContainer">
                    <a className="searchContent" >
                        <i className="fa fa-search"></i>
                        <span>搜索商家、商品名称</span>
                    </a>
                </div>
            </div>

        )
    }
}

export default Search;