## promise三种状态和现象

+ pending

```js
const promise1 = new Promise((resolve, reject) => {

});
console.log('promise1', promise1);
```

+ fulfilled

```js
// pending 到 fulfilled
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promise2 resolve 前', promise2);
        resolve();
        console.log('promise2 resolve 后', promise2);
    })
});
```

+ rejected

```js
// pending 到 rejected
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promise3 reject 前', promise3);
        reject();
        console.log('promise3 reject 后', promise3);
    })
});
```

+ fulfilled会执行then后面的函数
+ rejected会执行catch后面的函数

```js
const promise4 = Promise.resolve('promise4 data');
const promise5 = Promise.resolve('promise5 error');

promise4.then(data => {
    console.log('data', data);
}).catch(err => {
    console.error('error', err);
})

promise5.then(data2 => {
    console.log('data2', data2);
}).catch(err2 => {
    console.error('error2', err2);
})
```

+ then 正常返回的时候，Promise的状态是fulfilled
+ then 报错的时候，Promise的状态是rejected
+ catch 正常返回的时候，Promise的状态是fulfilled
+ catch 报错的时候，Promise的状态是rejected

## promise回调地狱

```js
const ID_BASE_URL = 'https://jsonplaceholder.typicode,com/todos';
const ROBOT_IMG_BASE_URL = 'https://robohash.org';

//获取机器人的id
function getRobotId(url, callback) {
    $.get(url, function (data) {
        const id = data.id;
        callback(id);
    });
}

// 创建机器人
function createRobot(id) {
    const img = document.createElement('img');
    img.src = ROBOT_IMG-BASE_URL + `/${id}?size=200x200`;
    document.body.appendChild(img);
}

// 回调地狱：金字塔的嵌套结构
const result = getRobotId(ID_BASE_URL + '/1', function (id) {
    createRobot(id);
    getRobotId(ID_BASE_URL + '/2', function (id) {
        createRobot(id);
        getRobotId(ID_BASE_URL + '/3', function (id) {
            createRobot(id);
            getRobotId(ID_BASE_URL + '/4', function (id) {
                createRobot(id);
            })
        })
    })
});
```

+ 用promise解决

```js
const ID_BASE_URL = 'https://jsonplaceholder.typicode,com/todos';
const ROBOT_IMG_BASE_URL = 'https://robohash.org';

//获取机器人的id (promise)
function getRobotIdPromise(url) {
    const promise = new Promise((resolve, reject) => {
        $.get(url, function (data) {
            const id = data.id;
            resolve(id);
        });
    })
    return promise;
}

// 创建机器人
function createRobot(id) {
    const img = document.createElement('img');
    img.src = ROBOT_IMG-BASE_URL + `/${id}?size=200x200`;
    document.body.appendChild(img);
}

getRobotPromise(ID_BASE_URL + '/1').then(function(id) => {
    createRobot(id);
})

// 多个
getRobotPromise(ID_BASE_URL + '/1').then(function(id) => {
    createRobot(id);
    return getRobotIdPromise(ID_BASE_URL + '/2');
}).then(function(id) {
    createRobot(id);
    return getRobotIdPromise(ID_BASE_URL + '/3');
}).then(function(id) {
    createRobot(id);
})
```

## promise加载图片

```js
function loadImage(src) {
    const promise = new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.onload = function() {
            resolve(img);
        }
        img.onerror = function() {
            const error = new Error(`图片加载失败，url为${src}`);
            reject(error);
        }
        img.src = src;
    });

    return promise;
}

const url = ''
loadImage(url).then(img => {
    console.log('img', img);
}).catch(e => {
    console.log('error', e);
})
```