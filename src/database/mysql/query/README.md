# 数据库查询

```shell script
SELECT [ * | ALL | DISTINCT COLUMN1, COLUM2 ]
FROM TABLE1 [ , TABLE2 ]
WHERE [ CONDITION1 | EXPRESSION1 ]
[ AND|OR CONDITION2 | EXPRESSION2 ]
ORDER BY COLUMN1 | INTEGER [ ASC|DESC ]
```

```shell script
select * from product_table
where cost < 5
```

```shell script
select * from product_table
where cost = 5
```

```shell script
select * from product_table
where cost < 5
order by product_desc asc
```
