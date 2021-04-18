// pub-sub  订阅/发布模式
// 实践：vue的 onece
class Event {
    constructor(){
        this.callBacks = {}
    }
    // 监听
    $on(name,fn){
        if(!this.callBacks[name]){
            this.callBacks[name]=[];
        }
        this.callBacks[name].push(fn);
    }
    // 触发
    $emit(name,arg){
        const cbs = this.callBacks[name];
        if(cbs){
            cbs.forEach(c=>{
                c.call(this,arg)
            })
        }
    }
    // 解邦
    $off(name,fn){
        this.callBacks[name] = null;
    }
}

let even = new Event();
even.$on('event1',arg=>{
    console.log(`event1触发`, arg)
})
even.$on('event2',arg=>{
    console.log(`event2触发`, arg)
})
even.$emit('event1',"测试1")
even.$emit('event2',"测试2")
console.log('---------------')
even.$off('event1')
even.$emit('event1',"测试1")


// 场景：伪代码
// A模块
//     import B
//     B.action();
// B模块
//     action(){
//         import C
//         c.action()
//     }
// C模块



// 像上面的代码就可以适用这种模式
// A
//     even.$emit('xx');
// B
//     even.$on('xxx')
//     even.$emit('xxx');
// C
    
