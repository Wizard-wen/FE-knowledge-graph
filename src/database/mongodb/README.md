# mongodb

## mongodb安装

## 数据库的备份

备份
```shell script
    mongodump 
        -- host <hostname>:<port> 
        -- authenticationDatabase <admin> 
        -— username <username> 
        -— password <password> 
        -— db <schema_name> 
        -— colectionName <collectionName> 
        -— out <output_directory_name>
```
恢复
```shell script
    mongorestore 
        —- host <hostname>:<port> 
        —- authenticationDatabase admin 
        —- username <username> 
        —- password <password> 
        —- db <schema_name> 
        —- verbose <path_to_dump_folder>
        or -— verbose <path_to_dump_folder/<collection_name>.bson>
```
```shell script
  db.copyDatabase("oldDBName","newDBName") 
```
