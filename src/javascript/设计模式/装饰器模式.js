/**
 * 装饰器模式
 * 在不改变对象自身的基础上，在程序运行期间给对象动态的添加方法。常见应用，redux的高阶组件
 * 或者react-rudux中的@connect，或者自己定义的一些高阶组件
 */

import React, { Component } from 'react'
// 统计渲染日志
const  withLog = comp=>{
    class NewComp extends Component{
        componentWillMount(){
            console.time("componentRender")
        }
        render(){
            return <comp {...this.props} />
        }
        componentDidMount(){
            console.timeEnd("componentRender")

        }
    }
   return NewComp;
    
}

// 使用1
//  @withLog
//  class xx

//使用2
// class xx
// export default withLog(xx)