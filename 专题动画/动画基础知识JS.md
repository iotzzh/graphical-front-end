# 动画JS基础知识

## setInterval
### 语法
```javascript
var intervalID = setInterval(func, [delay, arg1, arg2, ...]);
var intervalID = setInterval(function[, delay]);
var intervalID = setInterval(code, [delay]);
```

### 示例
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            width: 50px;
            height: 50px;
            background-color: aqua;
            position: relative;
        }
    </style>
</head>

<body>
    <div class="box"></div>

    <script>
        const boxDom = document.querySelector('.box');
        function ani() {
            let dir = 'r';
            let i = 0;
            let id = 0;
            id = setInterval(() => {
                if (dir === 'r') {
                    boxDom.style.left = `${++i}px`;
                    if (i === 100) {
                        dir = 'l';
                    }
                } else if (dir === 'l') {
                    boxDom.style.left = `${--i}px`;
                    if (i === 0) {
                        dir = 'r';
                    }
                }
            }, 10);
        }
        ani();
    </script>
</body>

</html>
```


## requestAnimationFrame
### 语法
```javascript
requestAnimationFrame(callback)
```

### 示例
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            width: 50px;
            height: 50px;
            background-color: aqua;
            position: relative;
        }
    </style>
</head>

<body>
    <div class="box"></div>

    <script>
        const boxDom = document.querySelector('.box');
        let dir = 'r';
        let i = 0; 
        function step(timeStamp) {
            if (dir === 'r') {
                boxDom.style.left = `${++i}px`;
                if(i === 100) dir = 'l';
            } else if (dir === 'l') {
                boxDom.style.left = `${--i}px`;
                if (i === 0) dir = 'r';
            }
            window.requestAnimationFrame(step);
        }

        window.requestAnimationFrame(step);
    </script>
</body>

</html>
```



