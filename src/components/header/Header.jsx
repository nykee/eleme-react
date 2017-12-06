import React from 'react';
// import {Link} from 'react-router'
import '../../style/header.css'
import '../../style/common.css'
// import axios from 'axios'
import {Row,Col} from 'antd'
class Header extends React.Component {
    constructor(){
        super();
        this.state={
            tempe:'',
            weatherPic:'',
            weather:'',
            locationAdd:'正在定位'
        }


    }
    getLocation(){
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.showPosition,this.showError);
        }else{
            alert("浏览器不支持地理定位。");
        }
    }
    showError(error){
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert("定位失败,用户拒绝请求地理定位");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("定位失败,位置信息是不可用");
                break;
            case error.TIMEOUT:
                alert("定位失败,请求获取用户位置超时");
                break;
            case error.UNKNOWN_ERROR:
                alert("定位失败,定位系统失效");
                break;
        }
    }
    showPosition(position){
        /*var lat = position.coords.latitude; //纬度
        var lng = position.coords.longitude; //经度*/

        var latlon = position.coords.latitude+','+position.coords.longitude;
        console.log(latlon);
        /*axios.get("http://api.map.baidu.com/geocoder/v2/?callback=renderReverse&location="+"39.934,116.329"+"&output=json&pois=1&ak=2bDYoECt97bksgX4w3j6FATWbs38FGHF",{withCredentials:true,headers:'Access-Control-Allow-Origin:*'}  ).then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        })*/
    }
        componentWillMount(){

        let self = this;
        // self.getLocation();

       /* axios.get('https://api.seniverse.com/v3/weather/now.json?key=h1edziukh9me5nmp&location=shanghai&language=zh-Hans&unit=c',{withCredentials:true}).then(function (res) {
            console.log(res);})*/
            /*self.setState({
                weather:res.data.results[0].weather_data[0].weather
            });
            let tempe = res.data.results[0].weather_data[0].date;
            tempe = tempe.slice(tempe.indexOf('：')+1, tempe.length-1);
            self.setState({
                tempe:tempe
            });
            // console.log(tempe);
            let now =new Date().getHours();
            let isNight =false;
            if((17<now&&now<=24)||(0<now&&now<=4)){
                isNight =true;
            }


            if(isNight){
                self.setState({
                    weatherPic:res.data.results[0].weather_data[0].nightPictureUrl
                })
            }
            else {
                self.setState({
                    weatherPic:res.data.results[0].weather_data[0].dayPictureUrl
                })
            }*/


    }
    render() {
        return (
            <header>
                {/*地理位置*/}
               <Row className="linerGradient ">
                   <Col span={16} className="locationCol headInfo">
                       <svg className="loca-svg">
                           <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#location">
                               <svg viewBox="0 0 26 31" id="location" width="100%" height="100%"><path fill="#FFF" fillRule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path></svg>
                           </use>
                       </svg>
                       <span className="location">黄浦区上海市委(人民大道北)</span>
                       <svg className="svg">
                           <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#arrow">
                               <svg viewBox="0 0 14 8" id="arrow" width="100%" height="100%"><path fill="#FFF" fillRule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path></svg>
                            </use>
                       </svg>
                   </Col>
                   <Col span={6} offset={2} className="weatherCol">
                       <div className="inlineB">
                           <h2 style={{color:'#fff'}}>{this.state.tempe}</h2>
                           <p style={{color:'#fff'}}>{this.state.weather}</p>
                       </div>
                       <img className='weatherPic' src={this.state.weatherPic} alt="天气图标"/>
                   </Col>
               </Row>



            </header>

        )
    }
}

export default Header;