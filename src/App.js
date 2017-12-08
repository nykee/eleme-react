import React, { Component } from 'react';
import Header from './components/header/Header'
import FootGuide from './components/footer/FootGuide'
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state={
            isIndex:false,
            subTitle:''
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
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.location.pathname);
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

    }
  render() {
    return (
      <div className="App">
          <Header isIndex={this.state.isIndex} subTitle={this.state.subTitle}></Header>
          {this.props.children}
          <FootGuide></FootGuide>
      </div>
    );
  }
}

export default App;
