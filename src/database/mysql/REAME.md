# mysql

## mysql安装与环境变量配置

## 连接/断开数据库
```shell script
# 连接
mysql -u root -p
# 连接远程数据库
mysql -h <ip地址> -p <端口号> -u <用户名> -p
mysql -h 192.168.0.1 dbname -u username -p
# 断开
exit
```

```shell script
# 展示数据库
show databases;
# 展示表
show tables;
# 选择数据库
use <数据库名>;
# 创建数据库
create database <数据库名>;
# 删除数据库
drop database <数据库名>;
```
# 创建数据库
