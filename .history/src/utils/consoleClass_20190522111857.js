import * as TYPE from "./checkType"
// 全局log变量
let isShowGlobalLog = true
// 设置模块开关（建议默认模块code>=1000）
let moduleArr = [
    {
        name: `login`,
        code: 1000,
        isShowLog: true
    }
]
// 设置样式(暂时设置文字颜色)
let styleArr = {
    red: `color:#f5576c`,
    blue: `color:#005bea`,
    green: `color:#00e3ae`,
    gray: `color:#485563`,
    pink: `color:#fe5196`
}
// 设置console的类
class Console {
    constructor(...dataArr) {
        // 定义默认数据
        this.data = []
    }
    // 把数组参数重新转化为函数中的参数
    isShowLog(...data) {
        if (isShowGlobalLog) {
            // 把参数给分个打印出来
            console.log.apply(null, this.data)
        } else {
            return fasle
        }
    }
    // 接收数据
    log(...dataArr) {
        // 获取传递来的参数
        this.data = dataArr
        return this
    }
    // 处理数据
    toString(...data) {
        let dataArr = []
        this.data.forEach((item, index) => {
            if (TYPE.isArray(item) || TYPE.isObj(item)) {
                // 如果数据为数组和json,那么转化为字符串
                dataArr.push(JSON.stringify(item))
            } else {
                // 其他的保持不变
                dataArr.push(item)
            }
            return item
        })
        console.log.apply(null, dataArr)
    }
    // 根据数据类型设置打印形式
    checkData(value, style) {
        if (typeof value === `string`) {
            console.log(`%c${value}`, styleArr[style])
        } else {
            console.log(`%c${JSON.stringify(value)}`, styleArr[style])
        }
    }
    // 带有样式的log
    logStyle(code = 0, style = `red`, ...dataArr) {
        this.checkGloabal(code, () => {
            if (dataArr.length === 1) {
                this.checkData(dataArr[0], style)
            } else {
                console.group("style log >>>>>>>>>>")
                dataArr.forEach((item, idnex) => {
                    this.checkData(item, style)
                })
                console.groupEnd()
            }
        })
        return this
    }
}

// 创建一个示例
export let dsxConsole = new Console()
// 设置log方法
export let Log = (...dataArr) => {
    dsxConsole.log(...dataArr)
    // 链式调用
    return dsxConsole
}
// 设置带有样式的log方法
export let LogStyle = (...dataArr) => {
    dsxConsole.logStyle(...dataArr)
    // 链式调用
    return dsxConsole
}
