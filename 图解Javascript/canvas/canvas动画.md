动画是由多幅连续的图片组成，按顺序切换不同的图片给人一种动画的感觉，切换的速度越快动画的感觉越真实，当速度达到1秒24幅图片的时候，人的肉眼就无法分辨了，这就是所说的24帧。canvas中的动画其实就是循环执行擦除和绘制的操作，并且一般会在操作之前保存环境，操作之后恢复环境。
使用canvas制作动画由两个关键点：循环执行，绘制每次显示的图片。循环执行主要有两种方式，一种是使用前面所学过的setInterval或者setTimeout方法；另一种是调用新增加的专门用于动画的requestAnimationFrame方法，这个方法不需要设置间隔时间，直接将处理逻辑写入参数的回调函数中就可以了。但是requeseAnimationFram自身需要被放到回调函数中，另外，它的启动操作可以用cancelAnimationFrame方法来取消。

示例：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <canvas id='c2d'>浏览器不支持canvas</canvas>
    <script>
        const canvas = document.getElementById('c2d');
        if (canvas.getContext) {
            let ctx = canvas.getContext('2d');
            function draw(){
                var date = new Date();
                h = date.getHours();
                m = date.getMinutes();
                s = date.getSeconds();
                dot = s % 2 ? " ": ":";

                var dateStr = h + dot + m + dot + s;

                ctx.save();
                ctx.clearRect(0,0,300,300);
                ctx.fillStyle="red";
                ctx.font = "37px Times New Roman";
                ctx.fillText(dateStr, 30,50);
                ctx.restore();
                window.requestAnimationFrame(draw);
            }

            draw();
        }
    </script>
</body>
</html>
```
![](https://upload-images.jianshu.io/upload_images/2789632-56cb94d8f8fc0a86.gif?imageMogr2/auto-orient/strip)
