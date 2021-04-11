# neo4j

```js
const neo4j = require('neo4j-drive');
const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', '888888'));
const session = driver.session();
// 写入数据
session.writeTransaction((txc)=> txc.run(`CREATE (person: PERSON {name: $name})`, {
  name: request.body.name
})).then(data => {});
// 读数据
session.run('MATCH(n:PERSON) RETURN n').then(data => {});
```
