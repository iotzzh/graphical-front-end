1. query 配 path, params 配 name
示例：
query:
```
this.$router.push(
    {
        path:'路由跳转路径',
        query:{id:id}
    }
)

this.$route.query.id
```
params:
```
this.$router.push(
    {
        name:"路由设置的name"
        params:{id:id}
    }
)

this.$route.params.id
```
使用query相当于是get请求,传过去的数值在地址栏中是可见的,params相当于是post,参数不会在地址栏中显示。

``注意``：使用params传值，就必须使用name跳转，或者手动填写完整的带有参数的url，否则传过去的值是没有的

``注意``： 使用query时，注意使用JSON转换下，不然在子组件中 ，刷新过后可能出现"[Object, object]"的结果
