//案例一 普通递归
function factorial(n){ 
  if( n === 1) return n;
  return n * factorial(n-1);
}

//案例二 尾递归（并非所有的语言都支持尾递归。）
//　因为尾递归函数每子一层不再需要使用父一层的变量，所以父一层执行完毕就会销毁栈记录，避免了内存溢出节省了内存空间。
function fac(n, total) {
  if (n === 1) return total;
  return fac(n - 1, n * total);
}

fac(5, 1) // 120

