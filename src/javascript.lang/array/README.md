# 数组操作总结

1.创建
    - Array.from()
    - Array.of()
1.
    - Array.isArray() 
1. 栈操作
    - push()
    - pop()
    - shift()
    - unshift()
1. 排序
    - sort()
        - @param() ((a, b) => { <0 | >0 | =0})
        - @return sorted array
    - reverse()
1.
    - keys()
    - values()
    - entries()
1. 复制填充
    - fill()
    - copyWithin()
1. 迭代
    - map()
    - filter()
        - @return element[]
        - @param (((element, index, array) => {}, this.arg))
    - every()
    - forEach()
        - @return undefined
        - @Param ((currentValue, index, array): boolean, thisArg)
    - some()
1. 归并
    - reduce()
    - reduceRight()
1. 操作
    - slice()
        - @param (begin, end) @return [begin, end)
        - @param (begin) @return [begin, Array.length -1]
    - splice()
        - @param (start) @return (start, Array.length - 1] @des 删除
        - @param (start, deleteCount) @return [start, start + deleteCount - 1] @des 删除
        - @param (start, deleteCount, [item1, item2...]) @return [start, start + deleteCount - 1] @des 删除后添加
    - concat()  
1. 搜索判断
    - indexOf()
    - lastIndexOf()
    - includes()
    - find()
        - @return item | undefined
        - @param ((element, index, array) => {}, this.arg)
    - findIndex()
1. 转换方法
    - toString()
    - valueOf()
    - toLocaleString()
    - join()
        - @param separator
        - @return string
1. 扁平化
    - flat()
    - flatMap()
