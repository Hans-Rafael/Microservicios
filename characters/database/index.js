const server = require('./src/server');
// const { PORT } = require("./src/config/envs");

const { Character, Film } = require("./src/database");

const PORT = 8004

// Character.list().then((res) => console.log(res));
// Character.get(24).then((res) => console.log(res));

// Film.insert({
//     _id: "50",
//     title: "Esta pelicula nunca se ha visto",
//     opening_crawl: "Kesesto",
//     director: "George Lucas",
//     producer: "Jopo",
//     characters: ["1","2","7","14"],
//     planets: ["2","4","5"]
// }).then((res) => console.log(res));

server.listen(PORT, ()=>{
    console.log(`Database service listening on port ${PORT}`);
})