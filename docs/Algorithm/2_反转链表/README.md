## 题目

+ 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表

## 解答

```js
// 双指针：
var reverseList = function(head) {
    if(!head || !head.next) return head;
    let temp = null, pre = null, cur = head;
    while(cur) {
        temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    // temp = cur = null;
    return pre;
};
```

```js
// 递归：
var reverse = function(pre, head) {
    if(!head) return pre;
    const temp = head.next;
    head.next = pre; 
    pre = head
    return reverse(pre, temp);
}

var reverseList = function(head) {
    return reverse(null, head);
};
```