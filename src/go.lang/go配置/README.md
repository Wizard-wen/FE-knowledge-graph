# 

GOPATH

GOPATH 环境变量用来指定你的工作区的位置，如果GOPATH没有设置, 它会自动设置在类Unix系统里像这样：

$HOME/go

```shell script
echo $HOME # /Users/song
```


```shell script
go env GOPATH # /Users/song/go
```


```shell script
# 启用 Go Modules 功能
go env -w GO111MODULE=on

# 配置 GOPROXY 环境变量，以下三选一

# 1. 七牛 CDN
go env -w  GOPROXY=https://goproxy.cn,direct

# 2. 阿里云
go env -w GOPROXY=https://mirrors.aliyun.com/goproxy/,direct

# 3. 官方
go env -w  GOPROXY=https://goproxy.io,direct
```
