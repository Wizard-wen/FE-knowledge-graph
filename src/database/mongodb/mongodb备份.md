# mongodb备份

## mongodump
```shell script
mongodump -h dbhost -d dbname -o dbdirectory
# 示例
mongodump -h localhost:27017 -d test -o ~/mongobackups/'date+"%m-%d-%y"'

```

## mongorestore

```shell script
mongorestore -h <hostname><:port> -d dbname <path>
```
