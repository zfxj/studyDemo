/**
 * 迭代器模式
 * 指的是提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示，迭代器模式可以吧迭代
 * 的过程从业务逻辑中分离出来，在使用迭代器模式之后，即使不关心对象内部的构造，也可以按顺序访问其中的每一个元素
 */
//  比如 map、forEach.....
var each = function(ary,callBack){
    for(var i=0;i<ary.length;i++){
        callBack.call(ary[i],i,ary[i])
    }
}
each([1,2,4],function(i,n){
    console.log([i,n])
})