## class 继承

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  drink() {
    console.log("喝水！");
  }
}

class Student extends Person {
  constructor(name, score) {
    // new Person();
    super(name);
    this.score = score;
  }

  introduce() {
    console.log(`我是${this.name}, 考了${this.score}分。`);
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  teach() {
    console.log(`我是${this.name}, 教${this.subject}。`);
  }
}

const student = new Student("张三", 99);
const teacher = new Teacher("哈默", "前端开发");
console.log("student", student);
student.introduce();
teacher.teach();
student.drink();
teacher.drink();
```

## 原型

```js
class Student {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  introduce() {
    console.log(`我是${this.name}, 考了${this.score}分。`);
  }
}

const student = new Student("张三", 99);
console.log("student", student);
student.introduce();
```

- prototype 和**proto**

<div align="center">
    <img :src="$withBase('/img/interview/原型链_1.png')" alt="原型链_1.png">
</div>

```js
Student.prototype; // 显式原型
student.__proto__; // 隐式原型
Student.prototype === student.__proto__; // true
```

## 原型链

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  drink() {
    console.log("喝水！");
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  teach() {
    console.log(`我是${this.name}, 教${this.subject}。`);
  }
}

const teacher = new Teacher("哈默", "前端开发");
console.log("teacher", teacher);
teacher.teach();
teacher.drink();
```

<div align="center">
    <img :src="$withBase('/img/interview/原型链_2.png')" alt="原型链_2.png">
</div>

- 判断是否是本身的属性

```js
// true 是本身的属性
teacher.hasOwnProperty("name");

// false 是原型链的方法
teacher.hasOwnProperty("teach");
```

- instanceof

```js
teacher instanceof Teacher; // true
teacher instanceof Person; // true
teacher instanceof Object; // true
teacher instanceof Array; // false
```

## instanceof 和 typeof

```js
const object = {};
const array = [];

console.log("result object(typeof) -", typeof object); // object
console.log("result array(typeof) -", typeof array); // object

const flagObject = object instanceof Array;
const flagArray = object instanceof Array;

console.log("result object(typeof) -", flagObject); // false
console.log("result array(typeof) -", flagArray); // true
```
