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
            <div class='data1'>{rhis.data1}</div>
        )
    }
```
