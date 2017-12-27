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
        let screenWidth =document.body.clientWidth;
        return screenWidth
    };
    static getClientHeight  () {
        let screenHeight =document.body.clientHeight;
        return screenHeight;
    }
}
export {ScreenAPI};