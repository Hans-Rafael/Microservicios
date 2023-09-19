const server = require("./src/server.js");

//testing
const { Character, Film, Planet } = require("./src/database");

//test1
/* 
Character.find()
.populate('homeworld',['_id','name'])
.populate('films',['_id','title'])
.then((res) => console.log(res)); */

//testing 2
/* Character.list()
.then((res) => console.log(res));
Character.get('0')
.then((res) => console.log(res)); */
//test3
/*
 Character.insert({
   _id: "205",
   name: "Hans xxx ",
   birth_year: '1/1/19xy',
   gender: "male",
   height : '1.82',
}).then((res) => console.log(res)); 
*/
//test 4
/*  Character.deleteById('205').then((res) => console.log(res)); */

server.listen(8004, () => {
  console.log("db Server is running on PORT 8004");
});
