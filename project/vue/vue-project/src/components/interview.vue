<template>
    <div class="interview">
        {{ msg }}
        {{ addMsg }}
        <!-- 面试题 -->
        <!-- 计算类型 -->
        number: {{ state.number }}
        number2: {{ state.number2 }}
        <div>
            1.绑定数据计算可以直接写在花括号里么？- ok
            <h3>number + 1 : {{ state.number + 1 }}</h3>
        </div>
        <div>
            2.截断 - 简单的字符串处理？ - ok
            <h3>{{ msg.slice(0, -1) }}</h3>
        </div>
        <div>
            3.浮点数操作？ - ok
            <h3>{{ state.number.toFixed(2) }}</h3>
        </div>
        <div>
            4.转整形？ - ok
            <h3>{{ parseInt(state.number, 10) }}</h3>
        </div>
        <div>
            5.函数加工？ - ok
            <h3>{{ calcNumber(state.number) }}</h3>
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

        <div v-for="it in state.stateArr" :key="it">{{ it }}</div>
        <div v-for="it in state.stateObj.stateArr" :key="it">{{ it }}</div>
    </div>
</template>

<script setup>
import {
    reactive,
    ref,
    computed,
    watch
} from 'vue'

const msg = 'welcome to zhaowa'
const state = reactive({
    number: 0,
    number2: 0,
    stateArr: [0, 1, 2, 3, 4],
    stateObj: {
        stateArr: [0, 1, 2, 3, 4]
    }
})

const addMsg = computed(() => msg + state.number)
watch(
    () => state.number,
    () => {
        state.number2 = state.number2 + 2
    }
)

state.stateArr.push(5)
state.stateObj.stateArr.push(5)

// const number = ref(0)
// number.value

const calcNumber = function(num) {
    return num + 2
}

const handleAdd = function() {
    state.number++
}

</script>


