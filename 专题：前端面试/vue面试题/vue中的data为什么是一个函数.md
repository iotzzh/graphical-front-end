# vue中的data为什么是一个函数

答：为了保证Vue在能实现组件化的前提下，也能保证数据不会被相互污染。

反过来说就是：如果data不是一个函数，而是一个对象，当Vue组件存在多个实例时，当某一个实例修改了data，其他实例也会受影响，因为使用的同一个data。

所以这里data必须得是一个函数，既符合Vue组件化的思想，也满足了数据的隔离性，即使有多个实例也不会相互影响。

示例：

```vue
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="increment">{{ count }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!',
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>
```

　　在这个例子中，data函数返回一个包含message和count两个属性的对象。每次创建组件实例时，Vue都会调用该函数返回一个新的数据对象，确保每个组件实例都有它自己的数据对象。