import React from 'react';
import SearchHistory from './children/SearchHistory'
import SearchMost from './children/SearchMost'
import '../../style/Search.css'


class Search extends React.Component {
    render() {
        return (
           <div >
               <SearchHistory></SearchHistory>
               <SearchMost></SearchMost>
           </div>

        )
    }
}

export default Search;