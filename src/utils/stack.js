/*
 * 用es6定义Stack栈类
 * 栈的数据结构：后进先出
*/
let _items = Symbol('stack');
export default class Stack {
    constructor () {
        this[_items] = [];
    }
    // 添加
    push (element) {
        this[_items].push(element);
    }
    // 移除
    pop (element) {
        return this[_items].pop();
    }
    // 查看栈顶元素
    peek () {
        const items = this[_items];
        return items[items.length - 1];
    }
    // 检查栈是否为空
    isEmpty () {
        return this[_items].length === 0;
    }
    // 栈的长度
    size () {
        return this[_items].length;
    }
    // 清空
    clear () {
        this[_items] = [];
    }
    // 打印
    print () {
        console.log(this[_items].toString());
    }
}
