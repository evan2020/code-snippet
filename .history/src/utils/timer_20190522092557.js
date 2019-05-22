// 设置定时器,自执行一定次数
// num为要执行的次数(默认为3次) 
// interval为执行的时间间隔(默认为1000ms,单位为ms)  如果需要自定义时间间隔可以传数组,参数为要间隔的时间,比如[1000,3000,6000]等(单位ms)
// funcRun为每次执行的函数内容(默认为提示无参时传入函数) (当函数return end 的时候自执行函数中断)
// funcEnd为结束时执行的函数内容(默认为提示程序已结束) 
// timerFun为定时器内容(作为自己调用自己的变量)
export let timer = (num = 3, interval = 1000, funcRun = () => {
    console.log(`请传入函数`)
}, funcEnd = () => {
    console.log(`执行结束,已清除定时器`)
}, timerFun = null) => {
    let that = this
    // 终止定时器
    let end = () => {
        // 提示程序结束
        clearTimeout(timer)
        // 重置定时器变量
        timerFun = null
        // 清除定时器
        funcEnd()
    }
    // 封装内部函数
    let InternalFun = () => {
        // 当num不为0时,程序执行
        if (num > 0) {
            // 执行自定义的内容
            if (funcRun() === `end`) {
                // 终止定时器
                end()
            } else {
                // 当前执行总次数减1
                num--
                // 再次调用同样的定时器
                timer(num, interval, funcRun, funcEnd, timerFun)
            }
        } else {
            // 终止定时器
            end()
        }
    }
    if (typeof interval === `number`) {
        // 如果传入的时间间隔是数字
        // 存储定时器
        timerFun = setTimeout(() => {
            InternalFun()
        }, interval)
    } else {
        // 如果需要自定义时间间隔(传入的参数为数组)
        num = interval.length
        timerFun = setTimeout(() => {
            InternalFun()
        }, interval.shift())
    }



}
