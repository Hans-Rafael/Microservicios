const server = require("./src/server.js");

//testing
//const { Character, Film, Planet } = require("./src/database");

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
   _id: "201",
   name: "Hans xxx ",
   birth_year: '1/1/19xy',
   gender: "male",
   height : '1.82',
}).then((res) => console.log(res)); 
*/
//test 4
 // Character.deleteById('201').then((res) => console.log(res)); 

 const PORT = 8004;

server.listen(PORT, () => {
  console.log(`db Server is running on PORT ${PORT}`);
});
