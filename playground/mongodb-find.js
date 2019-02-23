//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
      return console.log('Unable to connect to mongodb server.');
  }

  console.log('Connected to MongoDB Server.');

  // db.collection('Todos').find().toArray().then((docs)=>{
  //   console.log('Totos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch Todos',err);
  // });

  // db.collection('Todos').find({
  //     _id:new ObjectID('5c7109ac5dfafb3e286088ef')
  // }).toArray().then((docs)=>{
  //   console.log('Totos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch Todos',err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Totos count: ${count}`);
  //
  // },(err)=>{
  //   console.log('Unable to fetch Todos',err);
  // });

  db.collection('Users').find({name:'Amit Dhiman'}).count().then((docs)=>{
    console.log('Users count',docs);
  },(err)=>{
    console.log('Unable to fetch users',err);
  });

  db.collection('Users').find({name:'Amit Dhiman'}).toArray().then((docs)=>{
    console.log(docs);
  },(err)=>{
    console.log('Unable to fetch users',err);
  });

  db.close();

});
