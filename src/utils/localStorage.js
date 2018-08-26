// 检测本地存储
export let checkLocalStorage = () => {
    if (window.localStorage) {
        return true
    } else {
        return false
    }
}

// 获取当前本地存储的数据项数量
export let lenLocalStorage = () => {
    if (checkLocalStorage()) {
        return window.localStorage.length
    }
}

// 获取本地储存
export let getLocalStorage = (key) => {
    if (checkLocalStorage()) {
        let value = window.localStorage.getItem(key)
        // 判断值是否为字符串
        if (typeof (value) === `string`) {
            return value
        } else {
            return JSON.parse(value)
        }
    }
}

// 设置本地存储
export let setLocalStorage = (key, value) => {
    if (checkLocalStorage()) {
        // 判断值是对象还是字符串
        if (typeof (value) === `string`) {
            window.localStorage.setItem(key, value)
        } else {
            let item = JSON.stringify(value)
            window.localStorage.setItem(key, item)
        }
    }
}

// 清空某个存储
export let removeLocalStorage = (key) => {
    if (checkLocalStorage()) {
        window.localStorage.removeItem(key)
    }
}

// 清除所有本地存储
export let clearAllLocalStorage = () => {
    if (checkLocalStorage()) {
        window.localStorage.clear()
    }
}

// 监听本地存储变化
export let listenLocalStorage = () => {
    if (checkLocalStorage()) {
        window.addEventListener('storage', function (e) {
            console.log(`localStorage变化了`)
        })
    }
}
