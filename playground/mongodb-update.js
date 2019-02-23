//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
      return console.log('Unable to connect to mongodb server.');
  }

  // db.collection('Todos').findOneAndUpdate({
  //   text:'Eat Lunch'
  // },{
  //   $set:{
  //     completed:true
  //   }
  // },{
  //   returnOrignal:false
  // }).then((result)=>{
  //   console.log(result);
  // },(err)=>{
  //   console.log(err);
  // });

  db.collection('Users').findOneAndUpdate({
    _id:ObjectID('5c70ffd945ff4d053c8d1f07')
  },{
    $set:{
      name:'Amit Dhiman'
    },
    $inc:{
      age:1
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  },(err)=>{
    console.log(err);
  });

  //db.close();

});
