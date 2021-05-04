学习版本： vue 3.0
参考书籍
《vue.js实战》
《vue.js权威指南》
《深入浅出vue.js》
参考网址
vue2.0教程：https://cn.vuejs.org/v2/guide/
vue3.0教程：https://vue3js.cn/

## 环境搭建

## 模板语法
#### 指令
#### 基本指令
#### 条件渲染指令
#### 列表渲染指令
#### 参数、动态参数


## 条件渲染v-if、v-show, 列表渲染v-for
永远不要把 v-if 和 v-for 同时用在同一个元素上。

## 组件
#### 组件的定义，注册，使用

#### 组件的复用
## 组件生命周期
#### 组件的数据管理， 通过 Prop 向子组件传递数据， or data
camelCase (驼峰命名法) 
传递静态或动态 Prop
Prop验证

## 组件样式class style
对象语法，数组语法
绑定内联样式

#### 计算属性和监听器computerd,watch
我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。
###### methods,computed,watch对比，在什么场景下使用

## 事件处理
#### 事件修饰符

你还可以通过全局 config.keyCodes 对象自定义按键修饰符别名：

// 可以使用 `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112

#### 监听子组件事件
    父组件： v-on, 子组件：$emit()
    在组件上使用 v-model

## 表单输入绑定
v-model
你可以用 v-model 指令在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

修饰符
.lazy
.number
.trim

#### 通过插槽分发内容
#### 动态组件
<component v-bind:is="currentTabComponent"></component>
可以通过 Vue 的 <component> 元素加一个特殊的 is attribute 来实现
