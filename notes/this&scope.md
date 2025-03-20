### 作用域 & 上下文
#### 作用域链
* 面试题
```js
    let a = 'global'
    console.log(a)

    function course() {
        let b = 'zhaowa'
        console.log(b)
        // 函数表达式 相当于变量提升
        const session = ()=>{}
        // 函数提升 声明
        session()
        function session() {
            let c = 'this'
            console.log(c);

            function teacher() {
                // let d = 'yy'
                console.log(d) // let 报错  var 变量声明提升
                let d = 'yy'

                var d = 'yy'

                console.log('test',b) //作用域是向上查找
            }
            teacher()
        }
    }

    course()

    *************************
    // 提升的优先级 函数提升优先级高于变量提升,
    console.log('zhaowa', zhaowa)

    fucntion zhaowa() {
        this.course = 'this'
    }

    zhaowa.course = 'course'

    // *************
    // 非函数圈定的区域->块级作用域 var没有 let有
    if (true) {
        let e = 111
        var f = 222
        console.log(e,f) ///111 222
    }
    console.log(e,f) // 222

```

写代码时，尽量避免变量提升

* 1、对于作用域链，我们可以通过创建态来定位
* 2、手动取消，使用块级作用域 + let const

* 项目中：模块化 + 工程化 + 隔离

### this 上下文 context
* 我家门前有一条河，门前的河上有座桥，河里有群鸭
* 我家门前有条河，“这河”上面有座桥，“这河”里面有群鸭

* this是在执行时动态读取上下文所决定的

考察重点 - 各使用态中的指针指向
#### 函数直接调用 => this指向的是window => 函数表达式、匿名函数、函数
```js
    function foo() {
        console.log(this)
    }
    foo()

    const foo1 = () => {
        console.log(this)
    }
    foo1()
```

#### 隐式绑定-this指向调用的上一级
```js
    function fn() {
        console.log(this.a)
    }
    const obj = {
        a:1,
        fn
    }
    obj.fn = fn
    obj.fn()
    // fn()
```

#### 面试：
```js
    const foo = {
        bar: 100,
        fn: function() {
            console.log(this.bar)
            console.log(this)
        }
    }

    // 取出
    let fn1 = foo.fn
    fn1()

    // 追问1：如何改变属性的指向？

    const o1 = {
        text: 'o1',
        fn: function() {
            // 直接使用上下文-领导直接分活
            console.log('o1fn_this', this)
            return this.text
        }
    }

    const o2 = {
        text: 'o2',
        fn: function() {
            // 呼叫隔壁组leader帮助执行-部门协作
            return o1.fn()
        }
    }

    const o3 = {
        text:'o3'
        fn: function() {
            // 直接借人-接口人只读
            let fn = o1.fn
            return fn()
        }
    }

    console.log('o1fn',o1.fn())  //o1
    console.log('o2fn',o2.fn())  //o1
    console.log('o3fn',o3.fn())  //window
```

* 1、在执行函数时，去找到发起方
* 2、当一次执行变成公共执行，指向全局

严格模式

#### 追问2： 就是要把console。log('o2fn',o2.fn())的结果是o2
```js
    // 1.人为干涉 - bind \ call \ apply
    o1.fn.call(o2)

    // 2.不人为干涉
    const o2 = {
        text: 'o2',
        fn: o1.fn
    }
```

#### 显示绑定（bind | apply | call）
* 1.call <=> apply 传参不同 依次传入、数组传入
* 2.bind <=> call/apply 直接返回

#### 追问3：手写bind | bind原理
* 原理或者手写，解题思路
* 1.说明原理-写注释
* 2.根据注释-补齐代码

```js
    // 1.需求：手写bind => bind存放位置（挂载）=> Function.prototype
    Function.prototype.newBind = function() {
    // 2.bind是什么？=> 改变上下文 => 传入参数：newThis + args1~argsn
    const _this = this;
    const args = Array.prototype.slice.call(arguments);
    const newThis = args.shift();
    // 3.bind要什么？=> 返回执行函数 => 上下文被改变了的原函数（原函数参数不变）=> 返回函数包裹的apply
    return function() {
        return _this.newApply(newThis, args);
    }
    // 4.apply即可 => newThis
    Function.prototype.newApply = function(context) {
        // 函数检测
        if(typeof this !== 'function') {
            throw new Error('type error')
        }

        context = context || window

        // 临时挂载
        context.fn = this

        let result
                = arguments[1]
                ? context.fn(...argments[1])
                : context.fn()

        delete context.fn

        return result
    }
```

### 聊完上下文的人为自定义 => 作用域如何去突破
#### 闭包
```js
    function mail() {
        let content = 'xin'
        return function() {
            console.log(content)
            return content
        }
    }
    const envelop = mail()
    envelop()
```

* 1.函数可以作为返回值进行内外传递信息的
* 2.函数外部可以通过闭包的形式突破作用域的限制，来获取内部局部变量

* 闭包 - 模块通信的桥梁 + 函数 - js模块化的雏形 => js模块化

#### 实现私有变量
```js
    function createStack() {
        return {
            items: [],
            push(item) {
                this.item.push(item)
            }
        }
    }

    const stack = {
        items: [],
        push: function() {}
    }

    function createStackAdv() {
        const items = []

        return {
            push(item) {
                items.push(item)
            } 
            get() {
                return fn(items)
            }
        }
    }
```