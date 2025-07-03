const mongoose = require("mongoose");
main()
  .then(function () {
    console.log("connection successful");
  })
  .catch(function (err) {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// ready the schema of mongoose

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

//  create a Model
const User = mongoose.model("User", userSchema);

// const user1 = new User({
//   name: "sandesh",
//   email: "sandeshkumar@gmail.com",
//   age: 20,
// });

// user1.save();

// const user2 = new User({
//   name: "Golden kumar",
//   email: "golden@gmail.com",
//   age: 7,
// });

// user2
//   .save()
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// HERE ARE INSERTING DATA IN DOCUMENT WITH INSERTMANY([]) METHOD  IT RETURN ASYNC FUNCTION THEN I CAN APPLY .THEN() METHOD AND .CATCH() METHOD.

// User.insertMany([
//   { name: "Ram kumar", email: "ram@gmail.com", age: 55 },
//   { name: "Sanjeet kumar", email: "sanjeet@gmail.com", age: 33 },
//   { name: "Sonu kumar", email: "sonu@gmail.com", age: 44 },
// ])
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// HERE WE USE FIND METHOD IT RETURN WHOLE DOCUMENT

// User.find({age:{$gt: 20}})
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// HERE ARE USE FINDONE() METHOD IT RETURN QUERY BUT I APPLY .THEN() METHOD AND .CATCH() METHOD .

// User.findOne({ id: "68663c378d99e7c06eb5264e" })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// HERE ARE USE FINDBYID() METHOD IN

// User.findById('68663c378d99e7c06eb5264e').then((result)=>{
//   console.log(result);
// }).catch((err)=>{
//   console.log(err);
// })

// UPDATEONE METHOD IN MONGOOSE

// User.updateOne({ name: "sandesh" }, {name : 'mohit'})
//   .then((result) => {
//     console.log(result);
//   })
//   .then((err) => {
//     console.log(err);
//   });

// UPDATE MANY METHOD

// User.updateMany({name : 'Ram kumar'}, {name : 'Raj kumar'})
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// FINDONEANDUPDATE METHOD IN MONGOOSE

// User.findOneAndUpdate({name : 'mohit'}, {age : 40},{new : true}).then((result)=>{
//   console.log(result);
// }).catch((err)=>{
//   console.log(err);
// })

// FINDBYIDANDUPDATE METHOD IN MONGOOSE

// this is an array

// User.findByIdAndUpdate('68663c378d99e7c06eb52650', {name : 'ram'}, {new:true})
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// DELETE METHOD IN MONGOOSE

// User.deleteOne({ name: "mohit" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//MODULE.FINDBYIDANDDELETE()

// User.findByIdAndDelete("68663c378d99e7c06eb5264f")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//   { name: "sandesh kumar", email: "sandeshkumar@gmail.com", age: 20 },
//   { name: "sanjeet kumar", email: "sanjeet@gmail.com", age: 26 },
//   { name: "Rohit kumar", email: "rohit@gmail.com", age: 40 },
//   { name: "ram", email: "ram@gmail.com", age: 20 },
// ])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// DEFINE A MODEL

const Person = mongoose.model("Person", userSchema);

const userSchema2 = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
});

// const user = new Person({
//   name: "sandesh kumar",
//   age: 20,
//   email: "sandeshkumar@gmail.com",
// });

// user
//   .save()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const user2 = new Person({
//   name : 'Golden kumar',
//   age : 7,
//   email : 'golden@gmail.com',
// });

// user2.save().then((result)=>{
//   console.log(result);
// }).catch((err)=>{
//   console.log(err);
// })

Person.deleteMany({ name: "sandesh kumar" })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
