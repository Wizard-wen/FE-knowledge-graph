const { MongoClient } = require('mongodb');

(async () => {
  const mongoClient = await MongoClient.connect('mongodb://127.0.0.1:27017', {
    useUnifiedTopology: true
  });
  const db = mongoClient.db('mock');
  // console.log(await db.collection('orders').count());
  // 总销量
  // 计算到目前位置的所有订单的
  // const result = db.collection('orders').aggregate([
  //   {
  //     $group: {
  //       _id: null,
  //       total: { $sum: '$total' }
  //     }
  //   }
  // ]);
  // console.log(await result.next());

  // 订单金额汇总
  db.collection('orders').aggregate([
    {
      $match: {
        status: 'completed',
        orderDate: {
          // ISODate('2019-01-01')
          $gte: new Date('2019-01-01'),
          $lt: new Date('2019-04-01')
        }
      }
    },
    {
      $group: {
        _id: null,
        total: { $sum: '$total' },
        shippingFee: { $sum: '$shippingFee' },
        count: { $sum: 1 }
      }
    },
    {
      $project: {
        grandTotal: { $add: ['$total', '$shippingFee'] },
        count: 1,
        _id: 0
      }
    }
  ]).toArray((error, results) => {
    console.log(results);
  });
})();
