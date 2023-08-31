# vue中v-if和v-for为什么不建议同时使用
## 原因：
v-for比v-if优先级高，所以使用的话，每次v-for都会执行v-if,造成不必要的计算，影响性能，尤其是当之需要渲染很小一部分的时候。

## 示例
```html
    <ul>
        <li v-for="user in users" v-if="user.isActive" :key="user.id">
            {{ user.name }}
        </li>
    </ul>
```
如上述情况，即使有100个user中只有一个需要使用v-if，也需要整个循环数组，这在性能上是极大的浪费。

#### 解决方法
利用计算属性过滤
```html
<div>
	<div v-for="(user,index) in activeUsers" :key="user.index" >
		{{ user.name }} 
	</div>
</div>
data () {  // 业务逻辑里面定义的数据
    return {
      users,: [{
        name: '111111',
        isShow: true
      }, {
        name: '22222',
        isShow: false
      }]
    }
  }
computed: {
	activeUsers: function () {
		return this.users.filter(function (user) {
			return user.isShow;//返回isShow=true的项，添加到activeUsers数组
		})
	}
}
```

参考地址：https://zhuanlan.zhihu.com/p/147882950