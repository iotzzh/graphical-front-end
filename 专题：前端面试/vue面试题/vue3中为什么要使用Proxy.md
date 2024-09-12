# vue3中为什么要使用 Proxy

答：Vue 3 使用 Proxy 的主要目的是为了实现更灵活和强大的响应式系统，并且在此基础上还能够在性能上得到提升。

详：

1. Vue2的响应式有局限性。 在 Vue 2 中，Vue 使用了 Object.defineProperty 来实现数据的响应式。然而，Object.defineProperty 有一些限制，比如无法监听数组的变化以及无法动态添加属性。这导致 Vue 2 实现响应式的方式相对有限（push、pop、shift、unshift、splice、sort、reverse）。
2. Vue3的响应式更灵活、更强大。Vue 3 则采用了 Proxy 对象来替代 Object.defineProperty。Proxy 是 ES6 中新增的一个特性，它可以用来创建一个代理对象，可以拦截并定义对代理对象的操作。相比Object.defineProperty，Proxy 提供了更多的拦截操作，可以实现更细粒度的控制。
   1. 对于对象，Proxy 可以拦截属性的读取、赋值和删除操作，从而能够在属性发生变化时触发相应的更新。
   2. 对于数组，Proxy 可以拦截数组的修改操作，比如 push、pop、splice 等，从而能够在数组发生变化时触发相应的更新。
   3. 除了更好的监听变化外，Proxy 还提供了其他一些强大的功能。比如，可以通过 Proxy 对象实现深度观测，即观测对象内部所有嵌套属性的变化。此外，Proxy 还可以拦截对象的原型方法和构造函数调用，从而可以对对象的所有操作进行拦截和处理。