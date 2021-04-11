# 6. linux文件与目录管理

## 6.1 目录与路径

### 6.1.1 绝对路径与相对路径

### 6.1.2 目录的相关操作

```shell script
# 进入目录
cd
# 进入上次目录
cd -
# 当前路径
pwd 
# 创建目录
mkdir
# 删除空目录
rmdir
```

### 6.1.3 关于执行文件路径的变量

```shell script
echo $PATH
```

## 6.2文件与目录管理
### 6.2.1 文件与目录的查看 ls

```shell script
# 全部文件，包括隐藏文件
ls -a
# 直接列出，不排序
ls -f 
# 易读
ls -h
# 详细信息 
ls -l
# 连同子目录都会列出
ls -R
# 以文件容量大小排序，而不是文件名排序
ls -S
# 依时间顺序，而不是文件名
ls -t
```

### 6.2.2 复制、删除、移动

```shell script
# 
cp [source] [target]
```

```shell script
rm [-fir]
# force忽略不存在的文件
rm -f
# 交互式删除
rm -i
# 递归删除
rm -r
```


## 6.3文件内容查看

```shell script
# 查看文件
cat
# 反过来查看
tac
# 添加行号
nl
```

### 6.3.2 可翻页查看

```shell script
#
more
# 
less
```

### 6.3.3 数据截取

```shell script
#
head
# 
tail
```

### 6.3.4 非纯文本文件

```shell script
# 
od [-t TYPE] file
```

### 6.3.5 修改文件时间或创建新文件
```shell script
# 
touch [-acdmt] file
```
