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

     static getScrollHeight() {

        var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;

        if (document.body) {

            bodyScrollHeight = document.body.scrollHeight;

        }
       if(document.documentElement) {

            documentScrollHeight = document.documentElement.scrollHeight;

        }

        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
        }
}

export {ScreenAPI};