```yarn add aos```
version: 2.3.4

使用方式如下：
```vue
<template>
<div>
  <h1 :data-aos="item < 96 ? item % 2 === 0 ? 'zoom-in-up' : 'zoom-in-up' : 'zoom-in-up'" v-for="(item, index) in 100" :key="index">这是子组件页面11 {{ item }}</h1>
    <div style="height: 100px"></div>
</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted( async () => {
AOS.init({ });
});

</script>
```
