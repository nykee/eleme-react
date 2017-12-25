import React from 'react';
import '../../../style/Recommend.css'
import  axios from 'axios'

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

        let scrollTop = document.body.scrollTop ||document.documentElement.scrollTop;

        let clientHeight =document.body.clientHeight || document.documentElement.clientHeight;
        console.log("clientHeight:"+clientHeight);
        console.log("scrollTop:"+scrollTop);

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
    componentWillReceiveProps(){

    }

    render() {


        return (
            <div style={{background:'#fff'}}>
                <div className="shopList-title"> 推荐商家 </div>
                <div id="shopList" className="shopList-content">
                    <Shoplist shops={this.state.recommends}></Shoplist>
                </div>
            </div>

        )
    }
}

export default Recommend;