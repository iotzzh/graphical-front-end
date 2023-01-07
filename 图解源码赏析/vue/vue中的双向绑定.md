vue2: object.defineproperty
vue3: proxy
通过两种方式的比较，也能发现为什么vue3比vue2能做的响应操作更多，毕竟在拦截这一块，还是proxy更为强大一些。

简单示例展示：
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div { margin: 20px; }
    </style>
</head>

<body>
    <div class="origin">
        原生操作：
        <span>Test Origin</span>
        <button onclick="changeOri()">改变原生内容</button>
    </div>

    <div class="objectDefineProperty">
        object.defineproperty:
        <span class="testObjectDefineProperty"></span>
        <button onclick="changeObjectDefineProperty()">改变自定义字段内容</button>
    </div>

    <div class="proxy">
        proxy:
        <span class="testProxy">Test proxy</span>
        <button onclick="changeProxt()">改变代理内容</button>
    </div>

    <script>
        function changeOri() {
            var dom1 = document.querySelector('.origin>span');
            dom1.innerHTML = (new Date()).toString();
        }

        // vue2
        var vue2Obj = {};

        Object.defineProperty(vue2Obj, 'test', {
            get() {
                // 此处可以添加校验和拦截，变化
                return vue2Obj.test;
            },

            set(val) {
                var dom2 = document.querySelector('.testObjectDefineProperty');
                dom2.innerHTML = val;
            }
        });

        function changeObjectDefineProperty() {
            vue2Obj.test = 'ZZH';
        }

        // this.$set()， 重新获取对象，并且重新调用Object.defineProperty方法
        // push, pop, shift, unshift,splice, sort, reverse, 原生重写拦截

        // vue3
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
        // 可以监听很多，并拦截，具体看上面的文档
        const obj1 = { name: 'zzh', age: 18 };
        const handler = {
            get: (obj, prop) => {
                return 'test';
            },
            set: function (obj, prop, newVal) {
                var dom3 = document.querySelector('.testProxy');
                dom3.innerHTML = newVal;
            }
        }

        function changeProxt() {
            const obj2 = new Proxy(obj1, handler);
            obj2.name = 'TTTTTTTT';
        }

    </script>
</body>

</html>
```
