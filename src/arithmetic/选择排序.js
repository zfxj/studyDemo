/**
 * 原理
 * 首先从原始数组中找到最小的元素，并把该元素放在数组的最前面，然后再从剩下的元素中寻找最小的元素，放在之前最小元素的后面，知道排序完毕。
 * minIndex始终保存着最小值的位置的索引，随着i的自增，遍历的数组长度越来越短，直到完成排序
 */
 var example=[8,94,15,88,55,76,21,39];
 function selectSort(arr){
     var len=arr.length;
     var minIndex,temp;
     console.time('选择排序耗时')；
     for(i=0;i<len-1;i++){
         minIndex=i;
         for(j=i+1;j<len;j++){
             if(arr[j]<arr[minIndex]){
                 minIndex=j;
             }
         }
     temp=arr[i];
     arr[i]=arr[minIndex];
     arr[minIndex]=temp;
     }
     console.timeEnd('选择排序耗时');
     return arr;
 }
 console.log(selectSort(example));