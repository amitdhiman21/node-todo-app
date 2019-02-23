//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

//object destructuring in ES6
// var user = {name:'andrew',age:25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
      return console.log('Unable to connect to mongodb server.');
  }

  console.log('Connected to MongoDB Server.');

  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log('Successfully Inserted',JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name:'Amit Dhiman',
  //   age:35,
  //   location:'Yamunanagar, India'
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to create User.',err);
  //   }
  //
  //   //console.log('Successfully Created User',JSON.stringify(result.ops,undefined,2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });


  db.close();

});
