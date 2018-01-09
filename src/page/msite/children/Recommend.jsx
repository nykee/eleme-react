import React from 'react';
import '../../../style/Recommend.css'
import  axios from 'axios'
import {ScreenAPI} from '../../../util/ScreenAPI'

import Shoplist from './children/Shoplist'

class Recommend extends React.Component {
    constructor(){
        super();
        this.state ={
            recommends:[],
            isPosted:false
        };
        this.handleScroll =this.handleScroll.bind(this);
    }
    componentWillMount(){
        axios.get('shopping/restaurantsRecommend').then((res)=>{
            // console.log(res.data);
            this.setState({
                recommends:res.data
            });
            console.log(this.state.recommends);
            // console.log(this.recommends);
        }).catch((err)=>{
            console.log(err);
        });

    }
    handleScroll(){

        let scrollTop = ScreenAPI.getScrollTop();

        let clientHeight =ScreenAPI.getClientHeight();
        // console.log("clientHeight:"+clientHeight);
        // console.log("scrollTop:"+scrollTop);

        if(scrollTop > clientHeight){
            // console.log("bingo");

            if(this.state.isPosted ===true){
                return false;
            }
            else{
                axios.get('shopping/restaurantsRecommend10to20').then((res)=>{
                    this.setState({isPosted :true});
                    console.log(this.state.isPosted);
                    console.log(res.data);
                    this.setState({
                        recommends:this.state.recommends.concat(res.data)
                    })
                }).catch((err)=>{
                    console.log(err);
                })
            }

        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }


    render() {


        return (
            <div style={{background:'#fff',marginBottom:'65px'}} id="reco-container">
                <div className="shopList-title"> 推荐商家 </div>
                <div id="shopList" className="shopList-container">
                    <Shoplist shops={this.state.recommends}/>
                </div>
            </div>

        )
    }
}

export default Recommend;