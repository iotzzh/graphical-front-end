## 过渡 & 动画概述
Vue 提供了一些抽象概念，可以帮助处理过渡和动画，特别是在响应某些变化时。这些抽象的概念包括：
* 在 CSS 和 JS 中，使用内置的 <transition> 组件来钩住组件中进入和离开 DOM。
* 过渡模式，以便你在过渡期间编排顺序。
* 在处理多个元素位置更新时，使用 <transition-group> 组件，通过 FLIP 技术来提高性能。
* 使用 watchers 来处理应用中不同状态的过渡。


## 过渡
在插入、更新或从 DOM 中移除项时，Vue 提供了多种应用转换效果的方法。这包括以下工具：

* 自动为 CSS 转换和动画应用 class；
* 集成第三方 CSS 动画库，例如 animate.css ；
* 在过渡钩子期间使用 JavaScript 直接操作 DOM；
* 集成第三方 JavaScript 动画库。

###### 语法
```html
<transition name = "transition-name">
    <div>...</div>
</transition>
```

#### 过渡class
在进入/离开的过渡中，会有 6 个 class 切换。
* v-enter-from：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

* v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

* v-enter-to：定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter-from 被移除)，在过渡/动画完成之后移除。

* v-leave-from：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

* v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

* v-leave-to：离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave-from 被删除)，在过渡/动画完成之后移除。

###### 示例
<div style="text-align: center"><img src="./assets/transition-1.gif"></div>

```html
<template>
    <div>
        <button @click="onClick">点击</button>


        <transition name="fade">
            <p v-if="show"> 这是一段过渡文字</p>
        </transition>
        
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    data(){
        return {
            show: false,
        }
    },
    methods: {
        onClick() {
            this.show = !this.show;
        }
    }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
  color: red;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  color: blue;
}
</style>
```

## 动画
CSS 动画用法同 CSS 过渡，区别是在动画中 v-enter-from 类名在节点插入 DOM 后不会立即删除，而是在 animationend 事件触发时删除。

#### 示例
<div style="text-align: center"><img src="./assets/animate1.gif"></div>
code:

```html
<template>
  <div id="databinding">
    <button v-on:click="show = !show">点我</button>
    <transition name="bounce">
      <p v-if="show">学的不仅是技术，更是梦想！！！</p>
    </transition>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    data() {
        return {
            show: true,
        }
    }
})
</script>


<style scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>

```

#### 自定义过渡的类名
我们可以通过以下特性来自定义过渡类名：
* enter-class
* enter-active-class
* enter-to-class (2.1.8+)
* leave-class
* leave-active-class
* leave-to-class (2.1.8+)
自定义过渡的类名优先级高于普通的类名，这样就能很好的与第三方（如：animate.css）的动画库结合使用。
###### 示例
```html
<div id = "databinding">
<button v-on:click = "show = !show">点我</button>
<transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
>
    <p v-if="show">学的不仅是技术，更是梦想！！！</p>
</transition>
</div>
```

#### 显性的过渡持续时间
```html
<transition :duration="{ enter: 500, leave: 800 }">...</transition>
```


## Javascript钩子
可以在属性中声明 JavaScript 钩子:
html:
```html
<transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"
 
  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
>
</transition>
```
javascript
```javascript
// ...
methods: {
  // --------
  // 进入中
  // --------
 
  beforeEnter: function (el) {
    // ...
  },
  // 此回调函数是可选项的设置
  // 与 CSS 结合时使用
  enter: function (el, done) {
    // ...
    done()
  },
  afterEnter: function (el) {
    // ...
  },
  enterCancelled: function (el) {
    // ...
  },
 
  // --------
  // 离开时
  // --------
 
  beforeLeave: function (el) {
    // ...
  },
  // 此回调函数是可选项的设置
  // 与 CSS 结合时使用
  leave: function (el, done) {
    // ...
    done()
  },
  afterLeave: function (el) {
    // ...
  },
  // leaveCancelled 只用于 v-show 中
  leaveCancelled: function (el) {
    // ...
  }
}
```
这些钩子函数可以结合 CSS transitions/animations 使用，也可以单独使用。

当只用 JavaScript 过渡的时候，在 enter 和 leave 中必须使用 done 进行回调。否则，它们将被同步调用，过渡会立即完成。

推荐对于仅使用 JavaScript 过渡的元素添加 v-bind:css="false"，Vue 会跳过 CSS 的检测。这也可以避免过渡过程中 CSS 的影响。

## 初始渲染的过渡
可以通过 appear 特性设置节点在初始渲染的过渡

```html
<transition appear>
  <!-- ... -->
</transition>
```
这里默认和进入/离开过渡一样，同样也可以自定义 CSS 类名。
```html
<transition
  appear
  appear-class="custom-appear-class"
  appear-to-class="custom-appear-to-class" (2.1.8+)
  appear-active-class="custom-appear-active-class"
>
  <!-- ... -->
</transition>
```
自定义 JavaScript 钩子：

```html
<transition
  appear
  v-on:before-appear="customBeforeAppearHook"
  v-on:appear="customAppearHook"
  v-on:after-appear="customAfterAppearHook"
  v-on:appear-cancelled="customAppearCancelledHook"
>
  <!-- ... -->
</transition>
```