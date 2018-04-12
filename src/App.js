import React, { Component } from 'react';
import Header from './components/header/Header'
import FootGuide from './components/footer/FootGuide'
import SearchHeader from './page/search/children/SearchHeader'
import './App.css';
import '../src/style/common.css'

class App extends Component {

    constructor(){
        super();
        this.state={
            isIndex:false,
            subTitle:'',
            isSearchPage:false,
            url:''
        }


    }
    componentWillMount(){
        let windPath =window.location.href.slice(window.location.href.indexOf('#')+1)
        if(windPath ==='/'||windPath ==="/msite"){
            this.setState({
                isIndex:true
            })
        }
        else{
            this.setState({
                isIndex:false
            })
        }
        if(windPath ==='/search'){
            this.setState({
                isSearchPage:true
            })
        }
        else {
            this.setState({
                isSearchPage:false
            })
        }
    }
    componentWillReceiveProps(nextProps){
        // this.setState({url:nextProps.location.pathname});
        // console.log(nextProps.location.pathname);
        if(nextProps.location.pathname ==='/'||nextProps.location.pathname ==="/msite"){
            this.setState({
                isIndex:true
            })
        }
        else{
            this.setState({
                isIndex:false
            });
            if(nextProps.location.pathname ==='/discover'){
                this.setState({
                    subTitle:'发现'
                })
            }
            else if(nextProps.location.pathname ==='/order'){
                this.setState({
                    subTitle:'订单'
                })
            }
            else {
                this.setState({
                    subTitle:'我的'
                })
            }
        }
        if(nextProps.location.pathname ==='/search'){
            this.setState({
                isSearchPage:true
            })
        }
        else {
            this.setState({
                isSearchPage:false
            })
        }

    }
  render() {
    return (
      <div className="App">
          {this.state.isSearchPage?<SearchHeader></SearchHeader>:<Header isIndex={this.state.isIndex} subTitle={this.state.subTitle}></Header>}
          {this.props.children}
          {this.state.isSearchPage?'':<FootGuide ></FootGuide>}
      </div>
    );
  }
}

export default App;
