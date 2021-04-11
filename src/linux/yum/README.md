# yum
yum（ Yellow dog Updater, Modified）是一个在 Fedora 和 RedHat 以及 SUSE 中的 Shell 前端软件包管理器。

基于 RPM(redhat package manager) 包管理，能够从指定的服务器自动下载 RPM 包并且安装。可以自动处理依赖性关系，并且一次安装所有依赖的软体包，无须繁琐地一次次下载、安装。


yum 提供了查找、安装、删除某一个、一组甚至全部软件包的命令，而且命令简洁而又好记。

rpm -qa|grep yum

sudo yum install libcurl openssl

curl


wget linux下载命令
tar 解压
mv 移动文件夹


/usr/local/bin

配置环境变量


数据存储目录
日志文件目录


tail 查看文件命令

sudo mkdir -p /var/lib/mongo
sudo mkdir -p /var/log/mongodb
sudo chown `whoami` /var/lib/mongo     # 设置权限
sudo chown `whoami` /var/log/mongodb   # 设置权限

mongod --dbpath /var/lib/mongo --logpath /var/log/mongodb/mongod.log --fork
