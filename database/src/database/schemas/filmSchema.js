const { Schema } = require("mongoose");

const filmShema = new Schema({
  _id: String,
  title: String,  
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: Date,
  characters: [
    {
      type: String,
      ref: "Characters",
    },
  ],
  planets: [{ type: String, ref: "Planets" }],
});

module.exports = filmShema;