import React from 'react';
import {Link} from 'react-router'
import "../style/common.css"
import "../style/MsiteSearch.css"

class Search extends React.Component {
    render() {
        return (
            <div className="linerGradient searchContainerRow ">
                {/*搜索框*/}
                <div  className="searchContainer">
                    <Link className="searchContent" to="/search">
                        <i className="fa fa-search"></i>
                        <span>搜索商家、商品名称</span>
                    </Link>
                </div>
            </div>

        )
    }
}

export default Search;