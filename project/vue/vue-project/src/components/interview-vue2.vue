<template>
    <div class="interview">
        {{ msg }}
        {{ addMsg }}
        <!-- 面试题 -->
        <!-- 计算类型 -->
        number: {{ number }}
        number2: {{ number2 }}
        <div>
            1.绑定数据计算可以直接写在花括号里么？- ok
            <h3>number + 1 : {{ number + 1 }}</h3>
        </div>
        <div>
            2.截断 - 简单的字符串处理？ - ok
            <h3>{{ msg.slice(0, -1) }}</h3>
        </div>
        <div>
            3.浮点数操作？ - ok
            <h3>{{ number.toFixed(2) }}</h3>
        </div>
        <div>
            4.转整形？ - ok
            <h3>{{ parseInt(number, 10) }}</h3>
        </div>
        <div>
            5.函数加工？ - ok
            <h3>{{ calcNumber(number) }}</h3>
        </div>
        <div>
            6.三元运算？ - ok
            <h3>100 > 99 : {{ 100 > 99 ? '对' : '错' }}</h3>
        </div>
        <div>
            7.逻辑运算？- ok
            <h3>100 > 99 && 100 > 98:{{ 100 > 99 && 100 > 98 }}</h3>
        </div>

        <div @click="handleAdd">加油</div>

    </div>
</template>


<script>
export default {
    name: 'interview',
    data() {
        return {
            msg: 'string',
            number: 0,
            number2: 0
        }
    },
    methods: {
        calcNumber(num) {
            return num + 2
        },
        handleAdd() {
            this.number ++
        }
    },
    watch: {
        number() {
            this.number2 = this.number2 + 2
        }
    },
    computed: {
        addMsg() {
            return this.msg + this.number
        }
    }

}
</script>

