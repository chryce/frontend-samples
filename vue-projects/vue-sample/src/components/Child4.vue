<template>
  <div class="child-div">
    <h3>子组件4</h3>
    <button class="s-button" @click="parentChange">调用父组件方法｜修改父组件属性</button>
    <p>prop: <br>
      message={{ message }}<br>
      age:{{ age }}</p>
  </div>
</template>

<script setup>
import {ref} from "vue";
///////////////////////////////////////////////////////////////////////////////////
const message = ref(false);
const age = ref(0);

const doSth = (param) => {
  alert('子组件的 doSth 方法执行了！参数:' + JSON.stringify(param))
}
//暴露子组件方法、属性
defineExpose({
  doSth,
  message,
  age
})
///////////////////////////////////////////////////////////////////////////////////
//以下是触发父组件的方法
const emit = defineEmits(['responseSingle', 'parentMut'])
const parentChange = () => {
  //修改属性（触发父组件方法）
  emit('responseSingle', 'hello', 'world');
  //触发父组件方法
  emit('parentMut', {
    id: 1,
    name: '刘备'
  })
}
///////////////////////////////////////////////////////////////////////////////////

</script>