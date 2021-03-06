export * from './format2';
export * from './format3';

export const testA = () => {
    const a = [1,2,3].find(x => x > 2);
    console.log(1, a);
}

export const testB = () => {
    function Universe() {

        // 判断是否存在实例
        if (typeof Universe.instance === 'object') {
            return Universe.instance;
        }
    
        // 其它内容
        this.start_time = 0;
        this.bang = "Big";
    
        // 缓存
        Universe.instance = this;
    
        // 隐式返回this
    }
    
    // 测试
    var uni = new Universe();
    var uni2 = new Universe();
    console.log(2)
    console.log(uni === uni2); // true
}
