# docker

## image文件

```shell script
# 列出所有的image文件
docker image ls
# 删除image文件
docker image rm [imageName]
```

## 
```shell script
# 将image从仓库抓取到本地
docker image pull libarary/hello-world
# 查看image文件
docker image ls
# 运行image文件
docker container run hello-world
# 终止容器
docker container kill [containerId]
```

## docker容器实例

### .dockerignore文件

```ignorelang
.git
node_modules
npm-debug.log
```

### Dockerfile文件

```dockerfile
# FROM node:8.4：该 image 文件继承官方的 node image，冒号表示标签，这里标签是8.4，即8.4版本的 node
FROM node:8.4
# COPY . /app：将当前目录下的所有文件（除了.dockerignore排除的路径），都拷贝进入 image 文件的/app目录。
COPY . /app
# WORKDIR /app：指定接下来的工作路径为/app。
WORKDIR /app
# RUN npm install：在/app目录下，运行npm install命令安装依赖。
# 注意，安装后所有的依赖，都将打包进入 image 文件。
RUN npm install --registry=https://registry.npm.taobao.org
# EXPOSE 3000：将容器 3000 端口暴露出来， 允许外部连接这个端口。
EXPOSE 3000
```

### 创建image文件

```shell script
# -t 指定image文件名字
# :0.0.1指定标签，若不指定为latest
# . 为Dockerfile文件所在的路径，即当前路径
docker image build -t koa-demo .
docker image build -t koa-demo:0.0.1 .
# 查看镜像
docker image ls
```

### 生成容器

```shell script
# 从image文件生成容器
# -p参数：容器的 3000 端口映射到本机的 8000 端口。
# -it参数：容器的 Shell 映射到当前的 Shell，然后你在本机窗口输入的命令，就会传入容器。
# koa-demo:0.0.1：image 文件的名字（如果有标签，还需要提供标签，默认是 latest 标签）。
# /bin/bash：容器启动以后，内部第一个执行的命令。这里是启动 Bash，保证用户可以使用 Shell。
docker container run -p 8000:3000 -it koa-demo /bin/bash
```

ctrl + d 退出容器

```shell script

```


