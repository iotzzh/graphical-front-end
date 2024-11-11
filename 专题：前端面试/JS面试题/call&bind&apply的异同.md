# call&bind&apply的异同

## 相同点
都是用来改变this指向的

## 不同点
#### 传参不同
call、bind是依次传入，apply是数组传入

#### 返回不同
bind返回新函数，可以滞后执行，其他两个是立即执行。

## 示例
```javascript
   let obj = {
        name: this.name,
        objAge: this.age,
        myLove: function (fm, t) {
          console.log(this.name + "年龄" + this.age, "来自" + fm + "去往" + t);
        },
      };
      let obj1 = {
        name: "huang",
        age: 22,
      };
      obj.myLove.call(obj1, "达州", "成都"); //huang年龄22来自达州去往成都
      obj.myLove.apply(obj1, ["达州", "成都"]); //huang年龄22来自达州去往成都
      obj.myLove.bind(obj1, "达州", "成都")(); // huang年龄22来自达州去往成都
```
