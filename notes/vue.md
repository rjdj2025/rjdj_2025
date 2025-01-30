## vue基础用法
### 理论
#### 面试题1：简单聊聊对于MVVM的理解
a.语义化模板
b.MVC - model（数据） view(视图) controller(业务处理的逻辑)
c.MVVM - model view viewModel
    i.数据本身会绑定在viewmodel层，视图层跟viewmodel层关联
    ii.i 视图发生变化 => viewModel => 更改数据
    ii.ii 数据发生变化 => viewModel => 更改视图

双向绑定

### 写法
#### vue是如何利用mvvm写法统一和前端开发
数据双向绑定
a.利用花括号，构筑了数据与vm的绑定关系 => buildTemplate => build
b.通过视图绑定事件，来处理数据 => v-model => :value @input => model
```js
    <a-component v-model="data1"></a-component>

    // a-component
    props: {
        value: {
            type: string,
            default: ''
        }
    },
    methods: {
        handleChangeValue() {
            this.$emit('input', dataSon)
        }
    }
```
buildTemplate => render()
```jsx
    <template>
        <div class="data1">{{ data1 }}</div>
    </template>

    render() {
        return (
            <div class='data1'>{this.data1}</div>
        )
    }

    // v8 javascript设计模式 JavaScript语言精粹
    // 红宝石 犀牛书（高级程序设计）
```

#### 生命周期
##### 面试题：vue生命周期
创建阶段：beforecreate => created => beforemount => mounted

bC: new Vue() - 实例创建阶段
c: data | props | method | computed - 数据操作 => 不涉及vdom以及dom操作
bM: vDOM - 数据操作都可以进行，不涉及dom
m: DOM - 任何操作

更新阶段：beforeUpdate => updated
bU: vDom 完成更新 dom旧
u:dom已经更新 => 谨慎修改数据

销毁阶段：beforeDestroy => destroyed
bD: 实例未被销毁 - 清空eventBus...
d: 实例已经被销毁

#### 指令 | 监听
#### 条件
v-if v-show
v-else v-else-if

#### 循环
v-for
=> for & if
=> vue2.x v-for优先
=> vue3.x v-if优先

#### 其他
v-model v-once v-text v-html v-bind v-on
自定义指令
```js
    directives: {
        zhaowa: {
            update: function() {}
        }
    }
```

#### watch & computed
基于依赖收集、数据劫持

vue2.x
vue3.x


### vue进阶
### 特征一： 模板化 ——— 所见即所得 => 参数&层级 数据加工 个性化动态拼装
#### 插槽
组件包裹 外部维护参数以及结构，内部设定最终出现位置

* 面试点 => 默认插槽的方式 => 整个插槽内容的聚会
* 问题 => 多个插槽节点希望分开布局

#### 具名插槽
以name来标识插槽的身份，从而在组件内部做到可区分

* 面试点 => name索引如何做到按名称区分渲染 => 利用name索引了一段解析上下文空间
* 参数的传递 => 渲染的区分

* 问题 => 插槽如何实现内容参数自管理

#### 作用域插槽
外部做结构描述勾勒，内部做传参

#### 模板的二次加工方案
1. watch | computed => 数据与数据之间的加工
2. 复杂的模板相关数据处理
方案一： 函数 | 过滤器 => 无法获取vue实例
方案二： v-html - 逻辑运算 + 结构上拼装
方案三：jsx - all in js
* 1.语法糖实现
* 2.jsx优劣点
=> template => render => vm.render() diff key => render

### 特征二：组件化
```js
    Vue.component('component', {
        template: '<h2>zhaowa</h2>'
    })
    new Vue({
        el: '#app'
    })
```
* 1.抽象复用
* 2.精简

#### 混入 mixin -- 逻辑上的混入
* 1.应用：抽离公共逻辑（逻辑相同，模板不同，可复用）
* 2.合并策略：
    a.变量补充性，不论普通类型、引用类型 => 主体优先级更高
    b.生命周期mixin先行，主随后覆盖以主为主
