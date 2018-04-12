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
            isPosted:false,
            limit:4,
            offset:10,
            isEnd:false
        };
        this.handleScroll =this.handleScroll.bind(this);
    }
    componentWillMount(){
        axios.get('shopping/restaurantsRecommend').then((res)=>{
            // console.log(res.data);
            this.setState({
                recommends:res.data
            });
            // console.log(this.state.recommends);
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
        let scrollHeight =ScreenAPI.getScrollHeight();
        // console.log("scrollHeight"+scrollHeight);
        // console.log("scrollTop"+scrollTop);
        // console.log("clientHeight"+clientHeight);
        if(scrollHeight===scrollTop + clientHeight){
            // console.log("bingo");

            /*if(this.state.isPosted ===true){
                return false;
            }
            else{
                axios.get('shopping/restaurantsRecommendMore?offset='+this.state.offset+'&limit='+this.state.limit).then((res)=>{
                    this.setState({isPosted :true});
                    console.log(this.state.isPosted);
                    console.log(res.data);
                    this.setState({
                        recommends:this.state.recommends.concat(res.data),
                        offset:this.state.offset+this.state.limit
                    })
                }).catch((err)=>{
                    console.log(err);
                })*/
            axios.get('shopping/restaurantsRecommendMore?offset='+this.state.offset+'&limit='+this.state.limit).then((res)=>{
                this.setState({isPosted :true});
                console.log(this.state.isPosted);
                console.log(res.data);
                this.setState({
                    recommends:this.state.recommends.concat(res.data),
                    offset:this.state.offset+this.state.limit
                });
                if(res.data.length ===0){
                    this.setState({
                        isEnd:true
                    })
                }
            }).catch((err)=>{
                console.log(err);
            });
                this.setState({isPosted :false});


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
                    {this.state.isEnd?<p style={{padding:'.3rem 0'}}>没有更多了~</p>:''}
                </div>
            </div>

        )
    }
}

export default Recommend;