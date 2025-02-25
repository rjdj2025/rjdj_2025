# JS模块化
## 历史背景
JS本身就是为了简单页面的设计：
页面动画、表单提交，并不会内置任何命名空间或者模块化相关的概念。
随着业务飞速的扩张，针对JS的模块化涌现出了大量的解决方案

幼年期：无模块化
1.开始需要在页面中增加不同类型的js文件，如：动画js、验证js、格式化js
2.多种js为了维护和可读性，被分在了不同的js文件中
3.不同的文件在同一个模板中被引用

```js
<script src="jquery.js"></script>
<script src="main.js"></script>
<script src="deps1.js"></script>
<script src="desp2.js"></script>
```

<!-- main.js -->
```js
(function(){

})()
```
<!-- index.html -->
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-">
        <title>Document</title>
    </head>

    <body>
        <script src="main.js"></script>
    </body>
</html>
```

立即执行函数

认可：
相比于使用一个js文件去包含所有逻辑，这个多种js文件实现最简单初步的模块化，思想是进步的

问题开始出现：
污染全局作用域。每一个模块都是暴漏在全局的，协调每一个模块变量函数名称都不可以相同，不利于大型项目的分工开发与维护


成长期：模块化雏形——IIFE

立即执行函数
作用域的把控
```js
// 定义全局变量
let count = 0;
const increase = () => ++count;
const reset = () => {
    count = 0;
    console.log('count is reset');
}

increase();
reset();
```

利用函数作用于限制
```js
(() => {
    let count = 0;
    //
});

// 仅仅定义了一个函数，但里面的代码并没有执行，如何能够对齐原来的逻辑呢
(() => {
    let count = 0;
    // 
})();
```

尝试定义一个简单的模块
```js
const iifeCounterModule = (() => {
    let count = 0;
    return {
        increase: () => ++count;
        reset: () => {
            count = 0;
            console.log('count is reset');
        }
    }
})();

iifeCounterModule.increase();
iifeCounterModule.reset();
```
完成了一个模块的封装，实现了对外暴漏的功能，保留变量+不污染全局作用域
```js
// 优化1：如何依赖其他模块呢？
const iifeCounterModule = ((dependencyModule1, dependencyModule2) => {
    let count = 0;
    // dependencyModule做处理
    return {
        increase: () => ++count;
        reset: () => {
            count = 0;
            console.log('count is reset');
        }
    }
})(dependencyModule1,dependencyModule2)
```

面试题1：了解jQuery的依赖处理以及模块加载方案吗？
答：IIFE加传参调配

实际书写上，jQuery等框架实际应用会涉及到revealing的写法
```js
const revealingCounterModule = (() => {
    // 模块内部定义所有的函数和变量
    let count = 0;
    const increase = () => ++count;
    const reset = () => {
        count = 0;
        console.log("count is reset");
    };
    // 返回一个匿名对象
    return {
        // 这里是希望公开的方法
        increase,
        reset
    }
})();
```
本质实现与方案上并无不同，只是在写法思想上，更强调所有api以局部变量的形式定义在函数中，而仅仅对外暴露出可被调用的接口

成熟期：
CJSmodule：CommonJs
nodejs定制
特征：
通过module+export来对外暴漏接口
require来调用其他模块

模块组织方式
```js
// commonJSCounterModule.js
const depenencyModule1 = require('./dependencyModule1');
const depenencyModule2 = require('./dependencyModule2');

let count = 0;
const increase = () => ++count;
const reset = () => {
    count = 0;
    console.log('count is reset');
};

exports.increase = increase;
exports.reset = reset;

module.exports = {
    increase,
    reset
}

// main.js
const { increase, reset } = require('./commonJSCounterModule')
increase();

const commonJSCounterModule = require('./commonJSCounterModule')
commonJSCounterModule.increase();
```
实际执行处理

```js
(function(exports,require,module,__filename,__dirname) {
    const dependencyModule1 = require('./dependencyModule1');
    const dependencyModule2 = require('./dependencyModule2');

    let count = 0;
    const increase = () => ++count;
    const reset = () => {
        count = 0;
        console.log('count is reset');
    };
    module.exports = {
        increase,
        reset
    };

    return module.exports;
}).call(thisValue,exports,require,module,filename,dirname);

(function(exports,require,module,__filename,__dirname) {
    const commonJSCounterModule = require('./commonJSCounterModule')
    commonJSCounterModule.increase();
}).call(thisValue,exports,require,module,filename,dirname);
```

优点：
CommonJS规范在服务器端率先完成了JavaScript的模块化，解决了依赖、全局变量污染的问题，这也是js运行在服务端运行的必要条件
缺点：
由于服务端以及commonjs是同步加载模块的
新的问题：异步

面试题
module.exports和export的关系
commonJS中是没有module.exports的概念的;但是为了实现模块的导出，node中使用的是module的类，每一个模块都是module的一个实例，也就是module；所以在node中真正用于导出的其实根本不是exports，而是module.exports;因为module才是导出的真正实现者；最终进行导出的一定是module.exports={xxxx}
