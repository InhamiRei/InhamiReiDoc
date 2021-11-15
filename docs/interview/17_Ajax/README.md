## ajax优点

+ 1.可以无需刷新页面与服务器端进行通信
+ 2.允许你根据用户事件来更新部分页面内容

## ajax缺点

+ 1.没有浏览历史
+ 2.存在跨域问题（同源）
+ 3.SEO不友好

## 原生ajax

```js
// 获取button元素
const btn = document.getElementsByTagName('button')[0];
// 绑定事件
btn.onclick = function() {
    // 1.创建对象
    const xhr = new XMLHttpRequest();
    // 2.初始化 设置请求方法和url
    xhr.open('GET', 'http://127.0.0.1:8000/server');
    // 加参数
    // xhr.open('GET', 'http://127.0.0.1:8000/server?a=100&b=200');
    // 3. 发送
    xhr.send();
    // 4. 事件绑定，处理服务端的返回结果
    xhr.onreadystatechange = function() {
        // 判断（服务端返回了所有的结果）
        if(xhr.readyState === 4) {
            // 判断响应状态码 200 404 401 403 500
            // 2xx 成功
            if(xhr.status >= 200 && xhr.status < 300) {
                // 处理结果 行 头 空行 体
                console.log(xhr.status); // 状态码
                console.log(xhr.statusText); // 状态字符串
                console.log(xhr.getAllResponseHeaders()); // 所有响应头
                console.log(xhr.response); // 响应体
            }
        }
    }
}
```