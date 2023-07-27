# 动画CSS基础知识

## transition
CSS 过渡提供了一种在更改 CSS 属性时控制动画速度的方法。其可以让属性变化成为一个持续一段时间的，而不是立即生效的过程。比如，将一个元素的颜色从白色改为黑色，通常这个改变是立即生效的，使用 CSS 过渡后该元素的颜色将按照一定的曲线速率从白色变化为黑色。这个过程可以自定义。

### 语法
```css
div { transition: <property> <duration> <timing-function> <delay>; }
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
            transition:  all 0.5s ease-out;
        }
        .box:hover {
            width: 100px;
            height: 100px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
</html>
```

### 事件监听
```javascript
el.addEventListener("transitionstart", signalStart, true);
el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionend", updateTransition, true);
```

## 动画（animation）
### 属性
animation-delay、animation-direction、animation-duration、animation-iteration-count、animation-name、animation-play-state、animation-timing-function、animation-fill-mode

### 使用 keyframes 定义动画序列, 语法如下：
```css
@keyframes xxx {
    from {}
    to {}
}
or
@keyframes xxx {
    10% {}
    20% {}
    50% {}
    100% {}
}
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
            border-radius: 50%;
            animation: move 2s infinite alternate ease-in-out;
            position: relative;
            background-color: darkorange;
            /* backface-visibility: hidden; */
        }

        @keyframes move {
            0% { left: 0px; }
            50% { left: 50px; }
            100% { left: 100px; }
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
</html>
```

### 事件监听
```javascript
e.addEventListener("animationstart", listener, false);
e.addEventListener("animationend", listener, false);
e.addEventListener("animationiteration", listener, false);
```


