/*function ScreenAPI() {
    let getScreenWidth=function () {
        let screenWidth =document.body.clientWidth;
        return screenWidth
    };
    let getScreenheight =function () {
        let screenHeight =document.body.clientHeight;
        return screenHeight;
    }
}*/
class ScreenAPI{
    static getClientWidth () {
        return document.body.clientWidth || document.documentElement.clientWidth;
    };
    static getClientHeight  () {
        return document.body.clientHeight || document.documentElement.clientHeight;
    }
    static getScrollTop(){
        return document.body.scrollTop ||document.documentElement.scrollTop;
    }
}
export {ScreenAPI};