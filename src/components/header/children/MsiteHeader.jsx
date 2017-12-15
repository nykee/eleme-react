import React from 'react';
import {Row,Col} from 'antd'
import axios from 'axios'
// import '../../../plugins/geolocation.min.js'


class MsiteHeader extends React.Component {

    constructor(){
        super();
        this.state={
            tempe:'N/A',
            weather:'N/A',
            locationAdd:'正在定位',
            latlon:'',
            index:0,
        };


    }





    componentWillMount(){
        let self = this;
        window.addEventListener('message',function (event) {
            var loc = event.data;
            console.log('location', loc);
            if(loc.addr){
                self.setState({
                    locationAdd:loc.addr
                })
            }
            else {
                self.setState({
                    locationAdd:"定位失败"
                })
            }

        }, false);
        // var geolocation = new qq.maps.Geolocation("H4HBZ-AOMHS-QIKOH-6CEXF-C4LR2-VJFXW", "myapp");




        //获取地理经纬度
        /* function getLocation(){
            if (navigator.geolocation){
                navigator.geolocation.getCurrentPosition(showPosition,showError);
            }else{
                console.log("浏览器不支持地理定位。");
            }
        }
         function showError(error){
             console.log(error);
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    console.log("定位失败,用户拒绝请求地理定位");
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.log("定位失败,位置信息不可用");
                    break;
                case error.TIMEOUT:
                    console.log("定位失败,请求获取用户位置超时");
                    break;
                case error.UNKNOWN_ERROR:
                    console.log("定位失败,定位系统失效");
                    break;
            }
        }
        function showPosition(position){
            // console.log(self);
            var latlon = position.coords.latitude+','+position.coords.longitude;
            console.log(latlon);
            /!*axios.get('/location/get',{params:{
                    latlon:latlon
                }}).then((res)=>{
                console.log("定位请求发起成功");
                console.log(res.data);
            }).catch((e)=>{
                console.log(e);
            });*!/
        }*/
        // getLocation();

        // 获取实时天气
        axios.get('/weather/now').then((res)=>{
            // console.log(res.data);
            let temp = res.data.results[0].now.temperature;
            temp =temp+'°C';
            let weather =res.data.results[0].now.text;
            // let wPicBaseUrl ='../../../images/weather/';
            let index =res.data.results[0].now.code;

            self.setState({
                weather:weather,
                tempe:temp,
                index:index
            })
        }).catch((e)=>{
            console.log(e);
        })



    }
    render() {
        let index = this.state.index;


        return (
            <header className="header-container">
                {/*地理位置*/}
                <Row className="linerGradient " style={{height:'3.75rem'}}>
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
                        <ul className="inlineB">
                            <li><h2  className="weatherDetail">{this.state.tempe}</h2></li>
                            <li><p  className="weatherDetail">{this.state.weather}</p></li>
                        </ul>
                        <img className='weatherPic' src={require('../../../images/weather/'+index+'.png')} alt="天气图标"/>
                    </Col>
                </Row>
                <iframe id="geoPage"    style={{display:'none',height:0,width:0}} scrolling="no" src="https://apis.map.qq.com/tools/geolocation?key=H4HBZ-AOMHS-QIKOH-6CEXF-C4LR2-VJFXW&referer=myapp">
                </iframe>
    </header>

        )
    }
}

export default MsiteHeader;