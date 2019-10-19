import * as TYPE from "./checkType"
// 全局log变量
let isShowGlobalLog = true;
// 设置模块开关（建议默认模块code>=1000）
let moduleArr = [
    {
        name: `login`,
        code: 1000,
        isShowLog: true
    }
];
// 设置样式(暂时设置文字颜色)
let styleArr = {
    red: `color:#f5576c`,
    blue: `color:#005bea`,
    green: `color:#00e3ae`,
    gray: `color:#485563`,
    pink: `color:#fe5196`
};
// 设置console的类
class Console {
    constructor(...dataArr) {
        // 定义默认数据
        this.data=[]
    }
    // 检测全局log开关
    checkGloabal(code, fn) {
        // 全局log显隐
        if (isShowGlobalLog) {
            // 默认为显示模块log
            if (code === 0) {
                // 打印log(回调)
                fn();
            } else {
                // 模块显隐log
                if (this.checkModule(code)) {
                    // 打印log(回调)
                    fn();
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    }
    // 获取当前模块log开关
    checkModule(code) {
        // 设置开关
        let isShowLog = false;
        // 遍历模块
        moduleArr.forEach((item, index) => {
            if (item.code === code) {
                // 获取当前模块开关
                isShowLog = item.isShowLog;
            }
        });
        return isShowLog;
    }
    test(){
        console.log(this.data)
    }
    // 接收数据
    log(...dataArr) {
        this.data=dataArr
        return this
    }
    // 处理数据
    toString(){
        this.data.forEach((item,index)=>{
            if(TYPE.isArray||TYPE.isObj){
                item=JSON.stringify(value)
            }
            return item
        })
    }
    // 根据数据类型设置打印形式
    checkData(value, style) {
        if (typeof value === `string`) {
            console.log(`%c${value}`, styleArr[style]);
        } else {
            console.log(`%c${JSON.stringify(value)}`, styleArr[style]);
        }
    }
    // 带有样式的log
    logStyle(code = 0, style = `red`, ...dataArr) {
        this.checkGloabal(code, () => {
            if (dataArr.length === 1) {
                this.checkData(dataArr[0], style);
            } else {
                console.group("style log >>>>>>>>>>");
                dataArr.forEach((item, idnex) => {
                    this.checkData(item, style);
                });
                console.groupEnd();
            }
        });
        return this
    }
}

// 创建一个示例
export let dsxConsole = new Console();
// 设置log方法
export let Log = (...dataArr) => {
    dsxConsole.log(...dataArr);
    // 链式调用
    return dsxConsole
};
// 设置带有样式的log方法
export let LogStyle = (...dataArr) => {
    dsxConsole.logStyle(...dataArr);
    // 链式调用
    return dsxConsole
};
