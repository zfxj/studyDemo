/**
 * 策略模式
 * 定义一系列的算法。把他们一个个的封装起来，并且使他们可以相互替换。
 * 策略模式的目的就是将算法的使用算法的实现分离开来
 * 一个基于策略模式的程序至少由两部分组成
 * 1、一组策略类(可变)，策略类封装了具体的算法，并负责具体的计算过程
 * 2、环境类context(不变)，context接收客户 的请求，随后将请求委托给某一个策略类，要做到这一点，说明
 *    context中要维持对某个策略对象对引用
 */
    // 如：奖金计算，绩效为S得人的年终有4倍工资，绩效为A的有三倍，绩效为B的只有两倍工资

    // function calcuLate(level,salary){
    //     if(level==='s'){
    //         return salary*4
    //     }
    //     if(level==='A'){
    //         return salary*3
    //     }
    //     if(level==='B'){
    //         return salary*2
    //     }
    //     return salary
    // }

    // 1、策略
    const policy = {
        'S': function(salary){
            return salary*4
        },
        'A': function(salary){
            return salary*3
        },
        'B': function(salary){
            return salary*2
        },
    }
    // 2、使用
    function calculate(level,salary){
        return policy[level]?policy[level](salary):salary
    }