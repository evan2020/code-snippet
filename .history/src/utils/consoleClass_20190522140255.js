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
        // 设置定时器变量
        this.timer = null
        // 当前时间戳
        this.timeStamp = null
        // 设置时间戳数组开关
        this.timeStampArr = []
    }
    // 最终选择是否打印数据
    isShowLog(...data) {
        console.log(this.timeStampArr)
        console.log(this.timeStamp)
        if (isShowGlobalLog) {
            // 如果开启全局开关，把参数给分个打印出来
            if (!this.timeStampArr.length < 1) {
                console.log.apply(null, this.data)
            }
        } else {
            // 反之都不打印
            return fasle
        }
    }
    // 接收数据
    log(...dataArr) {
        // 获取传递来的参数
        this.data = [...dataArr]
        // 获取当前时间戳
        this.timeStamp = new Date().getTime()
        this.timeStampArr.push({
            nowTime: true,
            timer: null
        })
        this.timeStampArr[0].timer = setTimeout(() => {
            if (this.timeStampArr.length > 0) {
                console.log(`走了console >>>>>>>`, ...dataArr)
            }
        }, 100)
        return this
    }
    format(type = `string`) {
        if (type === `string`) {
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
            this.data = [...dataArr]
        }
    }
    // 将数据字符序列化（主要是把数组和json序列化，其他的暂时不变）
    toString(...data) {
        this.timeStampArr.shift()
        this.format()
        this.isShowLog()
    }
    // 设置数据显示指定的颜色（数据都得先全部转为字符串才可以）
    toColor(color) {
        this.timeStampArr.shift()
        this.format()
        console.group("style >>>>>>>>>>")
        this.data.forEach((item, index) => {
            this.style(item, color)
        })
        console.groupEnd()
    }
    // 根据数据类型设置打印形式
    style(item, color) {
        if (typeof item === `string`) {
            console.log(`%c${item}`, styleArr[color])
        } else {
            console.log(`%c${JSON.stringify(item)}`, styleArr[color])
        }
    }
}


// 设置log方法
export let Log = (...dataArr) => {
    // 创建一个示例
    let dsxConsole = new Console()
    dsxConsole.log(...dataArr)
    // 链式调用
    return dsxConsole
}
