import React from 'react';
import {Row,Col} from 'antd'
import axios from 'axios'

class MsiteHeader extends React.Component {

    constructor(){
        super();
        this.state={
            tempe:'',
            weatherPic:'',
            weather:'',
            locationAdd:'正在定位',
            latlon:''
        };
        // this.pUrl =''


    }

    getLocation(){
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.showPosition,this.showError);
        }else{
            console.log("浏览器不支持地理定位。");
        }
    }
    showError(error){
        switch(error.code) {
            case error.PERMISSION_DENIED:
                console.log("定位失败,用户拒绝请求地理定位");
                break;
            case error.POSITION_UNAVAILABLE:
                console.log("定位失败,位置信息是不可用");
                break;
            case error.TIMEOUT:
                console.log("定位失败,请求获取用户位置超时");
                break;
            case error.UNKNOWN_ERROR:
                console.log("定位失败,定位系统失效");
                break;
        }
    }
    showPosition(position){
        var latlon = position.coords.latitude+','+position.coords.longitude;
        this.setState({
            latlon:latlon
        })
    };
    /*showPosition(position){
        /!*var lat = position.coords.latitude; //纬度
        var lng = position.coords.longitude; //经度*!/

        var latlon = position.coords.latitude+','+position.coords.longitude;
        console.log(latlon);
        /!*axios.get("http://api.map.baidu.com/geocoder/v2/?callback=renderReverse&location="+"39.934,116.329"+"&output=json&pois=1&ak=2bDYoECt97bksgX4w3j6FATWbs38FGHF",{withCredentials:true,headers:'Access-Control-Allow-Origin:*'}  ).then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        })*!/
    }*/


    componentWillMount(){

        // this.crypto();
        let self = this;
        // console.log(this.props.isIndex);
        // console.log(this.props.location.pathname);
        /*console.log(location.pathname);*/
        // let path =browserHistory.getLocation().pathname;
        // console.log(path);
        /* console.log(window.location.href.slice(window.location.href.indexOf('#')+1));
         let windPath =window.location.href.slice(window.location.href.indexOf('#')+1)
         if(windPath ==='/'||windPath ==="/msite"){
             this.setState({
                 isIndex:true
             })
         }*/

        //获取地理经纬度
        self.getLocation();
        axios.get('/location/get',{params:{
            latlon:this.state.latlon
            }}).then((res)=>{
            console.log("定位请求发起成功");
            console.log(res.data);
        }).catch((e)=>{
            console.log(e);
        });
        // 获取实时天气
        axios.get('/weather/now').then((res)=>{
            console.log(res.data);
            let temp = res.data.results[0].now.temperature;
            temp =temp+'°C';
            let weather =res.data.results[0].now.text;
            let wPicBaseUrl ='../../../images/weather/';
            let wPicRealUrl=wPicBaseUrl+res.data.results[0].now.code+'.png';
            console.log(wPicRealUrl);
            // console.log(temp);
            self.setState({
                weather:weather,
                tempe:temp,
                weatherPic:wPicRealUrl
            })
        }).catch((e)=>{
            console.log(e);
        })



    }
    render() {
        return (
            <header className="header-container">
                {/*地理位置*/}
                <Row className="linerGradient header-wrapper">
                    <Col span={16} className="locationCol headInfo">
                        <svg className="loca-svg">
                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#location">
                                <svg viewBox="0 0 26 31" id="location" width="100%" height="100%"><path fill="#FFF" fillRule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path></svg>
                            </use>
                        </svg>
                        <span className="location">{this.state.locationAdd}</span>
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
                        <img className='weatherPic' src={require('../../../images/weather/0.png')} alt="天气图标"/>
                    </Col>
                </Row>
            </header>

        )
    }
}

export default MsiteHeader;