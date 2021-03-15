// 二分法，对折法（需要有序的数组）
let arr = [1,2,3,4,5,6]
const  binarySearch = ( item ) => {//要找的元素
        let mid = null //找一个中间数，定义为空，用来存值
        let low = 0  //最低位置
        let hight  = arr.length-1//最高位置（第一次比较接受数组的长度）
        let element = null //用来存放数组中间的值
        while ( low <= hight) {//用循环来判断，是否满足low<=hight
            mid = Math.floor(( low+hight ) / 2 )//向下取整，获取中间值得位置
            element = arr[mid]//获取数组中间的值
            if( element < item ){//比较，如果数组中间的值小于要找的元素
                low = mid + 1  //此时最低位，就是之前mid  中间值加1
            }else if ( element > item ){
                hight  = mid - 1 //此时的最高位置就是mid 中间值减1
            }else{
                return mid  //反之，进入else判断，就证明找到了
            }
        }
    return -1//防止溢出
    }
    console.log(binarySearch(5))