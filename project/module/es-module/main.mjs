// 同步
// import * as deps1 from './deps1.mjs' 
import { addA } from './deps1.mjs' //按需
import deps2 from './deps2.mjs'

deps1.addA()

deps2()

// 动态模块的加载
import("./async-deps3.mjs").then(mod => {
    mod.reset()
}) //异步，返回的是promise
