/**
 * 区分是不是首次渲染
 */
let isMount = true;
/**
 * 用于区分当前是那个useState
 */
let workInProgress = null;
/**
 * 不论class 还是hooks组件都有自己的fiber
 * 以下就是属于App的fiber
 */
const fiber = {
  stateNode: App, // 保存组件本身
  memoizedState: null, // 保存组件的state数据(class组件也有这样的一个属性用来保存state的数据)，因为可能有多个useState,需要有顺序的记录useState的值，就采用链表的数据结构
};

/**
 * useState
 */
function useState(initialState){
    // 当有很多个useState,标示当前是那一个hook
    let hook; 
    // 是否是首次渲染
    if(isMount){
        hook = {
            memoizedState:initialState,
            next:null // 链表中指向下一个useState的索引
        }
        workInProgress = hook;
        if(!fiber.memoizedState){
            fiber.memoizedState = hook;
            workInProgress = hook;
        }else{
            // 当有第二个useState的情况
            workInProgress.next = hook;
        }
    }
}

/**
 * 触发此mini hooks 能够运行起来
 */
function schedule() {
  // 每次调用触发新的更新，让指针复位，重新指向第一个
  workInProgress = fiber.memoizedState;
  const app = fiber.stateNode();
  isMount = false;
  return app;
}

function App() {
  const [num, setNum] = useState(0);
  return {
    onClick: () => {
      setNum((num) => num + 1);
    },
  };
}


window.app = schedule(); // 方便模拟点击