在日常开发中，我们可能会遇到一种情况：组件太灵活，且无法预先定义。那么我们就需要能够创建组件的能力，并且能组合到我们现有的界面中。

## 基础API
```javascript
// 创建
app.component(name, {})
// 组合
<component :is="createVueComponent()"></component>
```
很多人看到这里应该就大致知道怎么做了，后面的示例可以直接略过~

## 示例
#### 集成一个创建组件的方法
```javascript
import { createApp } from 'vue';
import { TComponent } from './type';

export const createVueComponent = (component: TComponent) => {
    const app = createApp({});
    app.component(component.name, {
        template: component.template,
        data: () => component.data || {},
        props: component.props || {},
        methods: component.methods,
        onMounted: component.onMounted,
    });
    return app.component(component.name);
};
```
#### 使用场景
这里正在向低代码扩展，所以只能存储字符串，那么这里就得有能利用字符串创建组的能力。
```vue
 <!-- 自定义内容 -->
 <template v-else-if="item.slot">
   <!-- 低代码：利用字符串创建新的组件 -->
   <component v-if="(typeof item.slot === 'object')" 
     :is="createVueComponent({ name: item?.slot?.name || '', template: item.slot.template, props: item.slot.props  })" 
     :row="scope.row" :index="scope.$index" :label="item.label" ></component>
   <!-- 当组件使用 -->
   <slot v-else :name="'zh-table-' + item.prop" :row="scope.row" :index="scope.$index" :label="item.label" />
 </template>
```
