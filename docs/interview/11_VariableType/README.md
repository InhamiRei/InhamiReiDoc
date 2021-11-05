## 原始数据类型

+ Undefined，Null，Boolean，Number，String
+ 原始数据类型是直接存储在栈（stack）中的简单数据段，占据空间小，大小固定
+ 属于被频繁使用的数据，所以放入栈中存储

<div align="center">
    <img :src="$withBase('/img/interview/原始数据类型_1.png')" alt="原始数据类型_1.png">
</div>

## 引用数据类型

+ 对象，数组，函数，null（指向空地址）
+ 引用数据类型存储在堆（heap）中的对象，占据空间大，大小不固定，如果存储在栈中，将会影响程序运行的性能
+ 引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址，当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体

<div align="center">
    <img :src="$withBase('/img/interview/原始数据类型_2.png')" alt="原始数据类型_2.png">
</div>