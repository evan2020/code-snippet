// 检测浏览器类型和版本
export let  getBrowserInfo=()=>{
    2     var Sys = {};
    3     var ua = navigator.userAgent.toLowerCase();
    4     var re =/(msie|firefox|chrome|opera|version).*?([\d.]+)/;
    5     var m = ua.match(re);
    6     Sys.browser = m[1].replace(/version/, "'safari");
    7     Sys.ver = m[2];
    8     return Sys;
    9 }