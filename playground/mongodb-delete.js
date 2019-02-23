//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
      return console.log('Unable to connect to mongodb server.');
  }

  //deleteMany
  // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((res)=>{
  //   console.log(res);
  // },(err)=>{
  //   console.log(err);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((res)=>{
  //   console.log(res);
  // },(err)=>{
  //   console.log(err);
  // });

  //findOneAndDelete
  db.collection('Users').findOneAndDelete({
    _id:new ObjectID('5c7107d352913c22304871b7')
  }).then((result)=>{
    console.log(result);
  },(err)=>{
    console.log(err);
  });

  //db.close();

});
