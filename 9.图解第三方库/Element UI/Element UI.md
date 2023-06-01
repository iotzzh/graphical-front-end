## form

#### 在使用form时，绑定数据使用:model而不是v-model，否则验证不起作用

#### ElementPlus报错: [ElForm] unexpected width NaN
当el-form的label-width设置为auto时，el-form-item无label属性的时候，切换路由时(切换页面)控制台抛出警告。

项目中的解决方法：
去除ElForm的labelWidth，避免 ElForm和ElFormItem的labelWidth冲突。
而要满足ElFormItem的label标签有一定的固定宽度，可以通过css样式实现。